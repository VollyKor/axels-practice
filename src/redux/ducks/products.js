import { createAction, createReducer } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

import * as req from '../../helpers/requests';

//   Actions
// ===========================================
const setProducts = createAction('products/set');

//  Functions
// ==============================================
export function* getProducts() {
    const response = yield call(req.getProducts);

    const data = response.data.data;

    yield put(setProducts(data));
}

//  Reducers
// =================================================
export const productsReducer = createReducer([], (builder) => {
    builder.addCase(setProducts, (_, { payload }) => payload);
});
