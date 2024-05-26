'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { ProductVariant } from 'lib/types';
import cn from 'lib/utils';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({
  availableForSale,
  selectedVariantId
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-primary p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }


  const [guideMessage, setGuideMessage] = useState(false);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    if (guideMessage) {
      timeoutRef.current = setTimeout(() => setGuideMessage(false), 5000);
    }
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [guideMessage, setGuideMessage])


  if (!selectedVariantId) {
    return (
      <div>
        <p className={cn('text-red-600 mb-2', !guideMessage && "opacity-0")}>
          Please choose a flavor first
        </p>
      
      <button
        onClick={() => setGuideMessage(true)}
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Add To Cart
      </button>
      </div>
    );
  }


  return (
    <div>
      <button
        onClick={(e: React.FormEvent<HTMLButtonElement>) => {          
          if (pending) { e.preventDefault(); }
        }}
        aria-label="Add to cart"
        aria-disabled={pending}
        className={clsx(buttonClasses, {
          'hover:opacity-90': true,
          [disabledClasses]: pending
        })}
      >
        <div className="absolute left-0 ml-4">
          {pending ? <LoadingDots className="mb-3 bg-white" /> : <PlusIcon className="h-5" />}
        </div>
        Add To Cart
      </button>
      
    </div>
  );
}

export function AddToCart({
  variants,
  availableForSale
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton availableForSale={availableForSale} selectedVariantId={selectedVariantId} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
