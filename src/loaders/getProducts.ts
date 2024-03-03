export async function getProducts(shopHref: string): Promise<Product[]> {
    const response = await fetch(`http://localhost:3000/api/shop/${shopHref}`);

    return await response.json();
}
