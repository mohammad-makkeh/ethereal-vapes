import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  offer,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  offer?: boolean;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex flex-col gap-2 w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[30%]': position === 'center'
      })}
    >
      <div className="flex items-center rounded-full border w-fit bg-white/80 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none rounded-full bg-primary p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
      {offer && (
        <div className="w-fit flex items-center rounded-full border bg-white/80 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
          <h3 className="ml-1 leading-none tracking-tight font-bold bg-red-700 p-2 text-white rounded-full">20% OFF <span className='hidden md:inline'>LIMITED OFFER</span></h3>
          <h3 className="mr-2 pl-2 leading-none tracking-tight md:text-base font-bold">Buy 3 for</h3>
          <Price
            className="flex-none rounded-full bg-primary p-2 text-white"
            amount={"33.60"}
            currencyCode={currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
        </div>
      )}
    </div>
  );
};

export default Label;
