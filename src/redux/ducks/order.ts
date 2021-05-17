import { createAction, createReducer } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { put } from 'redux-saga/effects';

import * as req from '../../helpers/requests';

export const POST_ORDER = createAction<InewOrder>('POST_ORDER');
export const sendOrder = createAction<Iorder>('order/post');

export type Params = { orderData: InewOrder; type: string };

export function* postOrder({ orderData }: Params) {
    const response: AxiosResponse<Iresponse<Iorder>> = yield req.postOrder(
        orderData
    );

    yield put(sendOrder(response.data.data));
}

export const initialState: Iorder = {
    orderId: '',
    contactEmail: '',
    deliveryDate: '',
};

export const orderReducer = createReducer(initialState, (builder) => {
    builder.addCase(sendOrder, (_, { payload }) => payload);
});
