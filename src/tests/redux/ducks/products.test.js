import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';

import * as req from 'helpers/requests';
import {
    getProducts,
    setProducts,
    GET_PRODUCTS,
    productsReducer,
} from 'redux/ducks/products';

const response = {
    data: {
        data: 3,
    },
};

const actionData = 3;

const productsArray = [{ id: 3 }, { id: 5 }];

describe('When testing actions', () => {
    it('should create an action to get products', () => {
        const type = 'GET_PRODUCTS';

        const payload = {
            text: 'some info',
        };

        const expectedAction = {
            type,
            payload,
        };

        expect(GET_PRODUCTS(payload)).toEqual(expectedAction);
    });

    it('should create an action to set products', () => {
        const type = 'products/set';

        const payload = {
            text: 'some info',
        };

        const expectedAction = {
            type,
            payload,
        };

        expect(setProducts(payload)).toEqual(expectedAction);
    });
});

describe('When testing sagas', () => {
    const it = sagaHelper(getProducts());

    it('should have called the mock API first', (result) => {
        expect(result).toEqual(call(req.getProducts));

        return response;
    });

    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(setProducts(actionData)));
    });
});

describe('When testing reducers', () => {
    it('should return the initial state', () => {
        expect(productsReducer(undefined, {})).toEqual([]);
    });

    it('should handle setProducts', () => {
        expect(productsReducer(undefined, setProducts(productsArray))).toEqual(
            productsArray
        );
    });
});
