import { createReducer, createAction } from '@reduxjs/toolkit';

export const setGeo = createAction('geo/set');
export const removeGeo = createAction('geo/emove');

const initialState = {
    lat: null,
    lng: null,
};

export const geoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setGeo, (state, { payload }) => payload)
        .addCase(removeGeo, () => initialState);
});
