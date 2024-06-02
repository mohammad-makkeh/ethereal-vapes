'use client';

import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Price from 'components/price';
import type { Cart } from 'lib/types';
import { createUrl, getProductByHandle, getVariantById } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
import CloseCart from './close-cart';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import OpenCart from './open-cart';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalAmount);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalAmount !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalAmount;
    }
  }, [isOpen, cart?.totalAmount, quantityRef]);




  const renderCartItems = () => {
    if (!cart) return "";
    return Object.entries(cart.items)?.map(async (cartItem, i) => {
      const [cartItemId, quantity] = cartItem;
      const merchandiseSearchParams = {} as MerchandiseSearchParams;
      const chosenVariant = getVariantById(cartItemId)
      const [productHandle] = cartItemId.split("_@@_");
      if (!chosenVariant || !productHandle) return "Couldn't find item"
      let image;
      const product = getProductByHandle(productHandle)
      if (!product) return "Couldn't find asd";
      chosenVariant.selectedOptions.forEach(({ name, value }: any) => {
        merchandiseSearchParams[name.toLowerCase()] = value;
        image = product.images.find(img => img.option === value)?.src;
      });
      const merchandiseUrl = createUrl(
        `/product/${productHandle}`,
        new URLSearchParams(merchandiseSearchParams)
      );

      const isDiscounted = (handle: string) => {
        if (handle === "vfeel" && quantity >= 3)
          return "20%"
        return "";
      }

      const getAmount = () => {
        if (isDiscounted(productHandle)) {
          return ((product.amount * quantity) * 0.8).toFixed(2);
        }
        return product.amount * quantity
      }

      return (
        <li
          key={i}
          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
        >
          <div className="relative flex w-full flex-row justify-between px-1 py-4">
            <div className="absolute z-40 -mt-2 ml-[55px]">
              <DeleteItemButton item={cartItemId} />
            </div>
            <Link
              href={merchandiseUrl}
              onClick={closeCart}
              className="z-30 flex flex-row space-x-4"
            >
              <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <Image
                  className="h-full w-full object-cover"
                  width={64}
                  height={64}
                  alt={
                    product.title || ""
                  }
                  src={image || product.thumbnail}
                />
              </div>

              <div className="flex flex-1 flex-col text-base">
                <div className="flex flex-col gap-1">
                  <span className="leading-tight">
                    {product.title}
                  </span>
                  {
                    isDiscounted(productHandle) ? <div className="text-xs font-bold text-red-800 uppercase">20% OFF</div> : null
                  }
                </div>
                <span className="text-blue-600 text-sm font-medium">{chosenVariant.selectedOptions[0]?.value}</span>
              </div>
            </Link>
            <div className="flex h-16 flex-col justify-between">
              <Price
                className="flex justify-end space-y-2 text-right text-sm font-semibold"
                amount={String(getAmount())}
                currencyCode={"USD"}
              />
              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                <EditItemQuantityButton item={cartItemId} type="minus" />
                <p className="w-6 text-center">
                  <span className="w-full text-sm">{quantity}</span>
                </p>
                <EditItemQuantityButton item={cartItemId} type="plus" />
              </div>
            </div>
          </div>
        </li>
      );
    })
  }

  function getOffer() {
    if (!cart) return;
    const arr = Object.entries(cart.items);
    let vfeelCount = 0;
    for (let i = 0; i < arr.length; i++) {
      const cartItemId = arr[i]?.[0];
      const quantity = arr[i]?.[1];
      if (!cartItemId ||
        quantity == undefined) return;
      const [productHandle] = cartItemId.split("_@@_");
      if (productHandle === "vfeel") vfeelCount += quantity;
    }
    if (vfeelCount >= 3) {
      const product = getProductByHandle("vfeel");
      if (!product?.amount) return;
      return (vfeelCount * product?.amount) * 0.2;
    }
  }


  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">My Cart</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart?.items?.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16" />
                  <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow overflow-auto py-4">
                    {renderCartItems()}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    {
                      getOffer() ?
                        <div className="mb-3 bg-green-300/80 rounded text-black p-4 py-6 border-none flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                          <p>
                            You saved <span className='text-green-900 font-black'>{getOffer()?.toFixed(2)}$</span> by buying 3 or more of the <span className='font-semibold'>VFEEL</span> vape.
                          </p>
                        </div>
                        : ""
                    }

                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Shipping</p>
                      <p
                        className="text-right text-base text-black dark:text-white"
                      >3$ <span className='opacity-40 font-normal '>in Beirut,</span> 4$ <span className='opacity-40 font-normal '>outside.</span></p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>Total</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={String(cart.totalAmount - (getOffer() || 0))}
                        currencyCode={"USD"}
                      />
                    </div>
                  </div>
                  <a
                    href={"/checkout"}
                    className="block w-full rounded-full bg-primary p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
