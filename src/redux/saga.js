import { createAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';

import { getProducts } from './reducers/products';
import { postOrder } from './reducers/order';

export const GET_PRODUCTS = createAction('GET_PRODUCTS');
export const POST_ORDER = createAction('POST_ORDER');

export default function* sagaWatcher() {
    yield takeEvery('GET_PRODUCTS', getProducts);
    yield takeEvery('POST_ORDER', postOrder);
}
