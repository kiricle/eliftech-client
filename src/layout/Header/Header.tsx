import { Link } from '@tanstack/react-router';
import styles from './Header.module.scss';
import CartSVG from './cart.svg?react';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.link} to="/">Shop</Link>
            <Link className={styles.link} to="/cart"><CartSVG className={styles.cart} /></Link>
        </header>
    );
};
