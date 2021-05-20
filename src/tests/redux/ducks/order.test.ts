import sagaHelper from 'redux-saga-testing';
import { put } from 'redux-saga/effects';

import * as req from 'helpers/requests';
import {
    postOrder,
    SEND_ORDER,
    POST_ORDER,
    orderReducer,
} from 'redux/ducks/order';

import { randomAction, order, newOrder } from '../../utils/mockData';
import { initialState } from 'redux/ducks/order';

const response = {
    data: {
        data: order,
    },
};

describe('When testing actions', () => {
    it('should create an action to post order', () => {
        const type = 'order/post';

        const expectedAction = {
            type,
            payload: newOrder,
        };

        expect(POST_ORDER(newOrder)).toEqual(expectedAction);
    });

    it('should create an action to send order', () => {
        const type = 'order/post';

        const expectedAction = {
            type,
            payload: order,
        };

        expect(SEND_ORDER(order)).toEqual(expectedAction);
    });
});

describe('When testing postOrder', () => {
    // @ts-ignore
    const it = sagaHelper(postOrder(order));
    it('should have called the mock API first', (result) => {
        expect(result).toEqual(req.postOrder(newOrder));
        return response;
    });

    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(SEND_ORDER(response.data.data)));
    });
});

describe('When testing reducers', () => {
    it('should return the initial state', () => {
        expect(orderReducer(undefined, randomAction())).toEqual(initialState);
    });

    it('should handle setProducts', () => {
        expect(orderReducer(undefined, SEND_ORDER(order))).toEqual(order);
    });
});
