import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | "lg" | undefined }) {
  return (
 
      <LogoIcon
        className={clsx({
          'h-[50px] w-[50px]': !size,
          'h-[80px] w-[80px]': size === "lg",
          'h-[30px] w-[30px]': size === 'sm'
        })}
      />
  );
}
