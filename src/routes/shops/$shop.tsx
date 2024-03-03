import {
    createFileRoute,
    useLoaderData
} from '@tanstack/react-router';
import { Catalog } from '../../components/Catalog/Catalog';
import { Shops } from '../../components/Shops/Shops';
import { getProducts } from '../../loaders/getProducts';
import { getShops } from '../../loaders/getShops';
import styles from '../index.module.scss';

export const Route = createFileRoute('/shops/$shop')({
    component: Shop,
    loader: async ({ params }) => {
        const shops = await getShops();
        const products = await getProducts(params.shop);

        return {
            shops,
            products,
        };
    },
});

function Shop() {
    const { products, shops } = useLoaderData({ from: '/shops/$shop' });
    
    return (
        <main className={styles.main}>
            <Shops shops={shops} />
            {products.length !== 0 ? (
                <Catalog products={products} />
            ) : (
                <h2>There is no products in the shop</h2>
            )}
        </main>
    );
}
