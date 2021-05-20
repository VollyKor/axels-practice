import { createAction, createReducer } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put } from 'redux-saga/effects';

import * as req from '../../helpers/requests';

export const POST_ORDER = createAction<InewOrder>('order/post');
export const SEND_ORDER = createAction<Iorder>('order/post');

export type Params = { orderData: InewOrder; type: string };

export function* postOrder({ orderData }: Params) {
    const response: AxiosResponse<Iresponse<Iorder>> = yield req.postOrder(
        orderData
    );

    yield put(SEND_ORDER(response.data.data));
}

export const initialState: Iorder = {
    orderId: '',
    contactEmail: '',
    deliveryDate: '',
};

export const orderReducer = createReducer(initialState, (builder) => {
    builder.addCase(SEND_ORDER, (_, { payload }) => payload);
});
