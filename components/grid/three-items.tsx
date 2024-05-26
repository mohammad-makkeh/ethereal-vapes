import { GridTileImage } from 'components/grid/tile';
import cn from 'lib/utils';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority,
  className,
}: {
  item: any;
  size: 'full' | 'half';
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(size === 'full' ? 'md:col-span-7 md:row-span-3' : 'md:col-span-5 md:row-span-1', className)}
    >
      <Link className={cn("relative block h-full w-full", size === "full" ? "aspect-square" : "pt-[52.25%]")} href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.thumbnail}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          className={cn(size==="full" && 'object-cover')}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.amount,
            currencyCode: "USD"
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid({homepageItems} : any) {

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2] || !homepageItems[3]) return null;

  const [firstProduct, secondProduct, thirdProduct, fourthProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-xl gap-4 px-4 pb-4 md:grid-cols-12 md:grid-rows-3">
      <ThreeItemGridItem size="full" item={firstProduct} className='md:animate-slide-in-from-left'/>
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} className='md:animate-slide-in-from-up'/>
      <ThreeItemGridItem size="half" item={thirdProduct} priority={true} className='md:animate-slide-in-from-right'/>
      <ThreeItemGridItem size="half" item={fourthProduct} priority={true} className='md:animate-slide-in-from-down'/>
    </section>
  );
}
