import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionIdFromPathname, getCollectionProducts } from 'lib/utils';


export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
//   const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const collection = getCollectionIdFromPathname(params.collection);
  const products = getCollectionProducts(collection?.value);

  return (
    <section>
      {products?.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
