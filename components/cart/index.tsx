import { cookies } from 'next/headers';
import { getCart } from './actions';
import CartModal from './modal';

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart();
  }

  return <CartModal cart={cart} />;
}
