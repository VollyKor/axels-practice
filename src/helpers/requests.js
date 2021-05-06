import axios from 'axios';

export const getProducts = async () =>
    await axios.get('https://demo7166187.mockable.io/products');

export const postOrder = async (OrderData) =>
    await axios.post('http://demo7166187.mockable.io/order', OrderData);

// export const getAddress = async (lat, lng) =>
//     await Address.get(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&result_type=country&key=${GOOGLE_API_KEY}`
//     );
