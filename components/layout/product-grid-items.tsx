import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: any }) {
  return (
    <>
      {products.map((product:any) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="relative inline-block h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                amount: product.amount,
                currencyCode: "USD"
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
