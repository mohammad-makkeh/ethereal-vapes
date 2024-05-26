import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { PRODUCTS, defaultSort, sorting } from 'lib/constants';

export default function SearchPage({
    searchParams
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

    const products = PRODUCTS;
    const resultsText = products.length > 1 ? 'results' : 'result';

    return (
        <>
            {searchValue ? (
                <p className="mb-4">
                    {products.length === 0
                        ? 'There are no products that match '
                        : `Showing ${products.length} ${resultsText} for `}
                    <span className="font-bold">&quot;{searchValue}&quot;</span>
                </p>
            ) : null}
            {products.length > 0 ? (
                <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <ProductGridItems products={searchValue ? products.filter(p => p.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) : products} />
                </Grid>
            ) : null}
        </>
    );
}
