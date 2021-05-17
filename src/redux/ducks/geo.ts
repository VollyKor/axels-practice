import { createReducer, createAction } from '@reduxjs/toolkit';

export const setGeo = createAction<Igeo>('geo/set');
export const removeGeo = createAction('geo/remove');

export const initialState: Igeo = {
    lat: 50.45466,
    lng: 30.5238,
};

export const geoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setGeo, (state, { payload }) => payload)
        .addCase(removeGeo, () => initialState);
});
