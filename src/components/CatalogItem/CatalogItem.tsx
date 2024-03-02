import { Button } from '../../ui/Button/Button';
import styles from './CatalogItem.module.scss';
import Img from './paracetamol.jpg';

export const CatalogItem = () => {
    return (
        <div className={styles.item}>
            <img
                className={styles.img}
                src={Img}
                alt="some drug"
            />
            <h3 className={styles.name}>Paracetamol</h3>
            <Button>Add to cart</Button>
        </div>
    );
};
