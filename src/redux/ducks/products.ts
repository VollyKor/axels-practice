import { createAction, createReducer } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';

import * as req from '../../helpers/requests';

export const GET_PRODUCTS = createAction('GET_PRODUCTS');

export const setProducts = createAction<Iproduct[]>('products/set');

export function* getProducts() {
    const response: AxiosResponse<Iresponse<Iproduct[]>> = yield call(
        req.getProducts
    );
    const data = response.data.data;

    yield put(setProducts(data));
}

const initialState: Iproduct[] = [];

export const productsReducer = createReducer(initialState, (builder) => {
    builder.addCase(setProducts, (_, { payload }) => payload);
});
