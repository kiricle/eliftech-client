export async function getShops(): Promise<Shop[]> {
    const response = await fetch('http://localhost:3000/api/shop/');

    return await response.json();
}