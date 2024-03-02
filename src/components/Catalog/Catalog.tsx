import { CatalogItem } from '../CatalogItem/CatalogItem';
import styles from './Catalog.module.scss';

export const Catalog = () => {
    return (
        <section className={styles.catalog}>
            <CatalogItem />
            <CatalogItem />
            {new Array(10).fill(1).map((_, index) => (
                <CatalogItem key={index} />
            ))}
        </section>
    );
};
