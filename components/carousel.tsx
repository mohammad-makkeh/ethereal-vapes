import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel({carouselProducts}: any) {

  if (!carouselProducts?.length) return null;


  return (
    <div className="max-w-screen-xl mx-auto w-full overflow-x-auto px-4 pb-6 pt-1">
      <ul className="flex gap-4">
        {carouselProducts?.map((product: any, i: number) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] "
          >
            <Link href={`/product/${product.handle}`} className="absolute h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.amount,
                  currencyCode: "USD"
                }}
                src={product.thumbnail}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
