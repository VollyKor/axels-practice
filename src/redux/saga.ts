import { takeEvery } from 'redux-saga/effects';

import { getProducts, GET_PRODUCTS } from './ducks/products';
import { postOrder, POST_ORDER } from './ducks/order';

export default function* sagaWatcher() {
    yield takeEvery(GET_PRODUCTS.type, getProducts);

    yield takeEvery(POST_ORDER.type, postOrder);
}
