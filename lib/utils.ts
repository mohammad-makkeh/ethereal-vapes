import clsx from 'clsx';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { COLLECTIONS, PRODUCTS } from './constants';


export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = ['SHOPIFY_STORE_DOMAIN', 'SHOPIFY_STOREFRONT_ACCESS_TOKEN'];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        '\n'
      )}\n`
    );
  }

  if (
    process.env.SHOPIFY_STORE_DOMAIN?.includes('[') ||
    process.env.SHOPIFY_STORE_DOMAIN?.includes(']')
  ) {
    throw new Error(
      'Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.'
    );
  }
};


export function getProductByHandle(handle: string) {
  return PRODUCTS.find(p => p.handle === handle)
}

export function getVariantById(variantId: string) {
  if (!variantId || !variantId.includes("_@@_")) return;
  for (let i = 0; i < PRODUCTS.length; i++) {
    const variants = PRODUCTS[i]?.variants;
    if (!variants) continue;
    const variantFound = variants.find(variant => variant.id === variantId);
    if (variantFound) return variantFound;
  }
}


export function getProductPriceByVariant(variantId: string) {
  const variant = getVariantById(variantId);
  return variant?.price;
}


const cn = (...classes: (string | undefined | false | null)[]): string => {
  return twMerge(clsx(...classes));
};

export default cn;


export function getCollectionProducts(collection?: string) {
  if (!collection) return;
  return PRODUCTS.filter(p => p.collection === collection);
}

export function getCollectionIdFromPathname(collectionathname: string) {
  return COLLECTIONS.find(c => c.path.includes(collectionathname))
}

export function getImageIndexByFlavor(productHandle: string, flavor: string) {
  const product = getProductByHandle(productHandle);
  if (!product?.variants.length || !product?.images?.length) return;
  for (let i = 0; i < product.images.length; i++) {
    if (product.images[i]?.option === flavor) return i;
  }
}
