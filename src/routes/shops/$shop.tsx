import { createFileRoute } from '@tanstack/react-router';
import { Shops } from '../../components/Shops/Shops';
import styles from '../index.module.scss';
import { Catalog } from '../../components/Catalog/Catalog';

export const Route = createFileRoute('/shops/$shop')({
    component: Shop,
});

function Shop() {
    const { shop } = Route.useParams();

    return (
        <main className={styles.main}>
            <Shops />
            <Catalog />
        </main>
    );
}
