import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/shops/$shop')({
    component: Shop,
});

function Shop() {
    const { shop } = Route.useParams();

    return <h2>{shop}</h2>;
}
