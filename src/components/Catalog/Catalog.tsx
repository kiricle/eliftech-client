import { CatalogItem } from '../CatalogItem/CatalogItem';
import styles from './Catalog.module.scss';

export const Catalog = ({products}: {products:Product[]}) => {
    return (
        <section className={styles.catalog}>
            {products.map((product) => (
                <CatalogItem key={product.id} />
            ))}
        </section>
    );
};
