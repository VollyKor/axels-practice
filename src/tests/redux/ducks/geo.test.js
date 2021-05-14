import { setGeo, removeGeo, initialState, geoReducer } from 'redux/ducks/geo';

const geoData = {
    lat: 23,
    lng: 32,
};

describe('When testing actions', () => {
    it('should create an action to set geo', () => {
        const payload = { text: 'some info' };
        const expectedAction = {
            type: 'geo/set',
            payload,
        };

        expect(setGeo(payload)).toEqual(expectedAction);
    });

    it('should create an action to remove geo', () => {
        const payload = { text: 'some info' };
        const expectedAction = {
            type: 'geo/remove',
            payload,
        };

        expect(removeGeo(payload)).toEqual(expectedAction);
    });
});

describe('When testing reducers', () => {
    it('should return the initial state', () => {
        expect(geoReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle setGeo', () => {
        expect(geoReducer(undefined, setGeo(geoData))).toEqual(geoData);
    });

    it('should handle removeGeo', () => {
        expect(geoReducer(undefined, removeGeo(geoData))).toEqual(initialState);
    });
});
