import { createReducer, createAction } from '@reduxjs/toolkit';

export const SET_GEO = createAction<Igeo>('geo/set');
export const REMOVE_GEO = createAction('geo/remove');

export const initialState: Igeo = {
    lat: 50.45466,
    lng: 30.5238,
};

export const geoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_GEO, (state, { payload }) => payload)
        .addCase(REMOVE_GEO, () => initialState);
});
