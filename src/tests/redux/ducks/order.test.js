import sagaHelper from 'redux-saga-testing';
import { put } from 'redux-saga/effects';

import * as req from 'helpers/requests';
import {
    postOrder,
    sendOrder,
    POST_ORDER,
    orderReducer,
} from 'redux/ducks/order';

const response = {
    data: {
        data: 3,
    },
};

const order = {
    orderId: 3,
};

const initialState = {
    orderId: '',
    contactEmail: '',
    deliverydate: '',
};

describe('When testing actions', () => {
    it('should create an action to post order', () => {
        const type = 'POST_ORDER';

        const payload = {
            text: 'some info',
        };

        const expectedAction = {
            type,
            payload,
        };

        expect(POST_ORDER(payload)).toEqual(expectedAction);
    });

    it('should create an action to send order', () => {
        const type = 'order/post';

        const payload = {
            text: 'some info',
        };

        const expectedAction = {
            type,
            payload,
        };

        expect(sendOrder(payload)).toEqual(expectedAction);
    });
});

describe('When testing postOrder', () => {
    const it = sagaHelper(postOrder(order));
    it('should have called the mock API first', (result) => {
        expect(result).toEqual(req.postOrder(order));
        return response;
    });

    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(sendOrder(response.data.data)));
    });
});

describe('When testing reducers', () => {
    it('should return the initial state', () => {
        expect(orderReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle setProducts', () => {
        expect(orderReducer(undefined, sendOrder(order))).toEqual(order);
    });
});
