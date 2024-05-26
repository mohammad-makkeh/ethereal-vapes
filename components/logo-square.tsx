import clsx from 'clsx';
import LogoIcon from './icons/logo';
import LogoIconDark from './icons/logo-dark';

export default function LogoSquare({ size }: { size?: 'sm' | "lg" | undefined }) {
  return (
    <>
      <LogoIcon
        className={clsx('dark:hidden', {
          'h-[50px] w-[50px]': !size,
          'h-[80px] w-[80px]': size === "lg",
          'h-[30px] w-[30px]': size === 'sm'
        })}
        />
        <LogoIconDark
        className={clsx('hidden dark:block', {
          'h-[50px] w-[50px]': !size,
          'h-[80px] w-[80px]': size === "lg",
          'h-[30px] w-[30px]': size === 'sm'
        })}
      />
        </>
  );
}
