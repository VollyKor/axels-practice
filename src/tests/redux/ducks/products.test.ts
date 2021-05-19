import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';

import * as req from 'helpers/requests';
import {
    getProducts,
    setProducts,
    GET_PRODUCTS,
    productsReducer,
} from 'redux/ducks/products';

import { products, randomAction } from '../../utils/mockData';

const response = {
    data: {
        data: products,
    },
};

describe('When testing actions', () => {
    it('should create an action to get products', () => {
        const type = 'GET_PRODUCTS';

        const expectedAction = {
            type,
            payload: undefined,
        };

        expect(GET_PRODUCTS()).toEqual(expectedAction);
    });

    it('should create an action to set products', () => {
        const type = 'products/set';

        const expectedAction = {
            type,
            payload: products,
        };

        expect(setProducts(products)).toEqual(expectedAction);
    });
});

describe('When testing sagas', () => {
    // sagaHelper doesn't work with TS
    // @ts-ignore
    const it = sagaHelper(getProducts());

    it('should have called the mock API first', (result) => {
        expect(result).toEqual(call(req.getProducts));

        return response;
    });

    it('and then trigger an action', (result) => {
        expect(result).toEqual(put(setProducts(products)));
    });
});

describe('When testing reducers', () => {
    it('should return the initial state', () => {
        expect(productsReducer(undefined, randomAction())).toEqual([]);
    });

    it('should handle setProducts', () => {
        expect(productsReducer(undefined, setProducts(products))).toEqual(
            products
        );
    });
});
