import { createLazyFileRoute } from '@tanstack/react-router';
import styles from "./index.module.scss"
import { Shops } from '../components/Shops/Shops';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <main className={styles.main}>
            <Shops />
        </main>
    );
}
