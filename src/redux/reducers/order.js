import { createAction, createReducer } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';

import * as req from '../../helpers/requests';

//   Actions
// ===========================================
const sendOrder = createAction('order/post');

//  Functions
// ==============================================
export function* postOrder(orderData) {
    const response = yield req.postOrder(orderData);
    yield put(sendOrder(response.data.data));
}

const initialState = {
    orderId: '',
    contactEmail: '',
    deliverydate: '',
};

//  Reducers
// =================================================
export const orderReducer = createReducer(initialState, (builder) => {
    builder.addCase(sendOrder, (_, { payload }) => payload);
});
