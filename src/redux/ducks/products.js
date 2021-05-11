import { createAction, createReducer } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

import * as req from '../../helpers/requests';

export const GET_PRODUCTS = createAction('GET_PRODUCTS');

const setProducts = createAction('products/set');

export function* getProducts() {
    const response = yield call(req.getProducts);

    const data = response.data.data;

    yield put(setProducts(data));
}

export const productsReducer = createReducer([], (builder) => {
    builder.addCase(setProducts, (_, { payload }) => payload);
});
