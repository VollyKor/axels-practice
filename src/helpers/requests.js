import axios from 'axios';

export const getProducts = async () =>
    await axios.get('https://demo7166187.mockable.io/products');

export const postOrder = async (OrderData) =>
    await axios.post('http://demo7166187.mockable.io/order', OrderData);
