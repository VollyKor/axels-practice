import axios from 'axios';

export const getProducts = async () =>
    await axios.get<Iresponse<Iproduct[]>>(
        'https://demo7166187.mockable.io/products'
    );

export const postOrder = async (OrderData: InewOrder) =>
    await axios.post<Iresponse<Iorder>>(
        'http://demo7166187.mockable.io/order',
        OrderData
    );
