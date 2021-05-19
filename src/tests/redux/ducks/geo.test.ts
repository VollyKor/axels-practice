import { setGeo, removeGeo, initialState, geoReducer } from 'redux/ducks/geo';

import { geoData, randomAction } from '../../utils/mockData';

describe('When testing actions', () => {
    it('should create an action to set geo', () => {
        const payload = { lng: 24, lat: 32 };
        const expectedAction = {
            type: 'geo/set',
            payload,
        };

        expect(setGeo(payload)).toEqual(expectedAction);
    });

    it('should create an action to remove geo', () => {
        const expectedAction = {
            type: 'geo/remove',
            payload: undefined,
        };

        expect(removeGeo()).toEqual(expectedAction);
    });
});

describe('When testing reducers', () => {
    it('should return the initial state', () => {
        expect(geoReducer(undefined, randomAction())).toEqual(initialState);
    });

    it('should handle setGeo', () => {
        expect(geoReducer(undefined, setGeo(geoData))).toEqual(geoData);
    });

    it('should handle removeGeo', () => {
        expect(geoReducer(undefined, removeGeo())).toEqual(initialState);
    });
});
