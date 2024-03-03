import { createFileRoute, useLoaderData } from '@tanstack/react-router';
import { Shops } from '../components/Shops/Shops';
import styles from './index.module.scss';
import { getShops } from '../loaders/getShops';

export const Route = createFileRoute('/')({
    component: Index,
    loader: () => getShops(),
});

function Index() {
    const shops = useLoaderData({ from: '/' });

    return (
        <main className={styles.main}>
            <Shops shops={shops}/>
        </main>
    );
}
