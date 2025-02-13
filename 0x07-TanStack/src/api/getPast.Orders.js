export default async function getPastOrders() {
    const response = await fetch("api/past-orders");
    const data = await response.json();
    return data;
}