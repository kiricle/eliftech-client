import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/cart')({
    component: CartPage,
});

function CartPage() {
    return (
        <div>
            <h1>Cart Page</h1>
        </div>
    );
}
