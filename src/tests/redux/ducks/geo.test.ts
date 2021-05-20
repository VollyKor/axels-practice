import { SET_GEO, REMOVE_GEO, initialState, geoReducer } from 'redux/ducks/geo';

import { geoData, randomAction } from '../../utils/mockData';

describe('When testing actions', () => {
    it('should create an action to SET_GEO', () => {
        const payload = { lng: 24, lat: 32 };
        const expectedAction = {
            type: 'geo/set',
            payload,
        };

        expect(SET_GEO(payload)).toEqual(expectedAction);
    });

    it('should create an action to REMOVE_GEO', () => {
        const expectedAction = {
            type: 'geo/remove',
            payload: undefined,
        };

        expect(REMOVE_GEO()).toEqual(expectedAction);
    });
});

describe('When testing reducers', () => {
    it('should return the initial state', () => {
        expect(geoReducer(undefined, randomAction())).toEqual(initialState);
    });

    it('should handle SET_GEO', () => {
        expect(geoReducer(undefined, SET_GEO(geoData))).toEqual(geoData);
    });

    it('should handle REMOVE_GEO', () => {
        expect(geoReducer(undefined, REMOVE_GEO())).toEqual(initialState);
    });
});
