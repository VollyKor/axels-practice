import { createAction, createReducer } from '@reduxjs/toolkit';
import { put } from 'redux-saga/effects';

import * as req from '../../helpers/requests';

const sendOrder = createAction('order/post');

export function* postOrder(orderData) {
    const response = yield req.postOrder(orderData);
    yield put(sendOrder(response.data.data));
}

const initialState = {
    orderId: '',
    contactEmail: '',
    deliverydate: '',
};

export const orderReducer = createReducer(initialState, (builder) => {
    builder.addCase(sendOrder, (_, { payload }) => payload);
});
