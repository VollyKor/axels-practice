import { orderReducer } from './ducks/order';
import { productsReducer } from './ducks/products';
import { geoReducer } from './ducks/geo';

const reducer = {
    products: productsReducer,
    order: orderReducer,
    geo: geoReducer,
};

export default reducer;
