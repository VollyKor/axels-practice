import { takeEvery } from 'redux-saga/effects';

import sagaWatcher from '../../redux/saga';

import { getProducts, GET_PRODUCTS } from '../../redux/ducks/products';
import { postOrder, POST_ORDER } from '../../redux/ducks/order';

describe('saga watchers call', () => {
    let generator: any = null;
    beforeAll(() => {
        generator = sagaWatcher();
    });

    it('should take every the getProducts function', () => {
        const expected = takeEvery(GET_PRODUCTS.type, getProducts);
        const actual = generator.next();

        expect(actual.value).toEqual(expected);
    });

    it('should take every the postOrder function', () => {
        const expected = takeEvery(POST_ORDER.type, postOrder);
        const actual = generator.next();

        expect(actual.value).toEqual(expected);
    });

    it('should be done on next iteration', () => {
        expect(generator.next().done).toBeTruthy();
    });
});
