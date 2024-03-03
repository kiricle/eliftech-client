import { Link } from '@tanstack/react-router';
import styles from './Shops.module.scss';

export const Shops = ({ shops }: { shops: Shop[] }) => {
    return (
        <nav className={styles.shops}>
            {shops.map(({ href, id, name }) => (
                <Link
                    key={id}
                    className={styles.link}
                    to="/shops/$shop"
                    params={{ shop: href }}
                >
                    {name}
                </Link>
            ))}
        </nav>
    );
};
