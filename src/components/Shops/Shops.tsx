import { Link } from '@tanstack/react-router';
import styles from './Shops.module.scss';

export const Shops = () => {
    return (
        <nav className={styles.shops}>
            <Link
                className={styles.link}
                to="/shops/$shop"
                params={{ shop: 'drugs-24' }}
            >
                Drugs 24
            </Link>
            <Link
                className={styles.link}
                to="/shops/$shop"
                params={{ shop: 'pharmacy' }}
            >
                Pharmacy
            </Link>
        </nav>
    );
};
