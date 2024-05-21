'use server';

import { TAGS } from 'lib/constants';
import { Cart } from 'lib/types';
import { getProductPriceByVariant } from 'lib/utils';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

function generateOrderId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let orderId = '';
  const length = 10;

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      orderId += characters[randomIndex];
  }

  return orderId;
}


export async function addItem(previousState: any, selectedVariantId: string | undefined) {
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (!cartId) {
    cartId = generateOrderId();
    cookies().set('cartId', cartId);
  }

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    cart = JSON.parse(cookies().get('cart')?.value || "{}");
    if (!cart.items) cart.items = {}
    if (cart.items[selectedVariantId]) {
      cart.items[selectedVariantId] = ++cart.items[selectedVariantId];
    }
    else
      cart.items[selectedVariantId] = 1;
    const price = getProductPriceByVariant(selectedVariantId)
    if (price) {
      if (cart.totalAmount)
        cart.totalAmount = +cart.totalAmount + price.amount;
      else cart.totalAmount = price.amount;
    }
    if (cart.totalQuantity)
      cart.totalQuantity = cart.totalQuantity + 1;
    else cart.totalQuantity = 1;
    cookies().set('cart', JSON.stringify(cart));

    revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error adding item to cart';
  }
}

export async function removeItem(prevState: any, selectedVariantId: string) {
  let cartId = cookies().get('cartId')?.value;
  let cart;
  
  if (!cartId) {
    return;
  }
  
  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }
  
  try {
    cart = JSON.parse(cookies().get('cart')?.value || "{}");
    if (!cart.items || !cart.items[selectedVariantId]) return;
    if(cart.items[selectedVariantId] === 1) deleteItem(prevState, selectedVariantId);
    cart.items[selectedVariantId] = --cart.items[selectedVariantId];

    const price = getProductPriceByVariant(selectedVariantId)
    if (price) {
      cart.totalAmount = +cart.totalAmount - price.amount;
    }
    else return console.error("could not get the price of variant: " + selectedVariantId);
    cart.totalQuantity = cart.totalQuantity - 1;
    cookies().set('cart', JSON.stringify(cart));

    revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error adding item to cart';
  }
}
export async function deleteItem(prevState: any, selectedVariantId: string) {
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (!cartId) {
    return;
  }

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    cart = JSON.parse(cookies().get('cart')?.value || "{}");
    if (!cart.items || cart.items[selectedVariantId]) return;

    const price = getProductPriceByVariant(selectedVariantId)
    if (!price) return console.error("could not get the price of variant: " + selectedVariantId);
    const amountToRemove = cart.items[selectedVariantId] * price.amount;

    cart.totalAmount = +cart.totalAmount - amountToRemove;

    cart.totalQuantity = cart.totalQuantity - cart.items[selectedVariantId];

    delete cart.items[selectedVariantId];

    cookies().set('cart', JSON.stringify(cart));

    revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error adding item to cart';
  }
}





export async function getCart(): Promise<Cart | undefined> {
  let cart;
  try {
    const cartString = cookies().get('cart')?.value;
    if (!cartString) return;
    cart = JSON.parse(cartString);
  } catch (e) {
    console.error(e)
    return
  }
  return cart;
}

