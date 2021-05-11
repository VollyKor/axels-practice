import { createReducer, createAction } from '@reduxjs/toolkit';

export const addAddress = createAction('address/add');
export const removeAddress = createAction('address/remove');

const initialState = {
    city: '',
    country: '',
    build: '',
    zip: '',
};

export const addressReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addAddress, (_, { payload }) => payload)
        .addCase(removeAddress, () => initialState);
});
