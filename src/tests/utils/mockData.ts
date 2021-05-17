export const products = [
    {
        id: '132',
        name: 'Boots',
        price: '100',
        img: 'https://pixabay.com/get/ge03278b9a4415afdfb3ba98ea3cc26558521c9ce7aa1419845348408127266ac67a221725aeba0c54f87bceabeb31eeb_640.jpg',
        color: 'black',
    },
    {
        id: '146',
        name: 'Shoes',
        price: '130',
        img: 'https://pixabay.com/get/gf81b65afdc147703108c5b13db7759cc83582cdea7686ad840e67be5d06b4d3590400a8ccdfcd979caca9bc3bf9ac62a_640.jpg',
        color: 'brown',
    },
    {
        id: '173',
        name: 'Sandals',
        price: '70',
        img: 'https://pixabay.com/get/gbb7487e68df5a961adbe74bd167fcd7bf2e17cfb92ff2835becb7c6351bf37b04779e04238b805d9efa2b5a32fc6e076_640.jpg',
        color: 'gold',
    },
];

export const geoData: Igeo = {
    lat: 23,
    lng: 32,
};

export const order: Iorder = {
    orderId: '13123',
    contactEmail: 'test@test.com',
    deliveryDate: '12 may 2020',
};

export const newOrder: InewOrder = {
    paymentData: 'data',
    shippingData: 'another data',
    billingData: 'billing data',
};

export const randomAction = () => ({ type: 'action', payload: undefined });
