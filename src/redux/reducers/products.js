import axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_PRODUCTS = "GET_PRODUCTS";

const setProducts = createAction("products/set");

const getProducts = async () =>
  await axios.get("https://demo7166187.mockable.io/products");

export function* sagaWatcher() {
  yield takeEvery(GET_PRODUCTS, GetProducts);
}

function* GetProducts() {
  const {
    data: { data },
  } = yield call(getProducts);

  yield put(setProducts(data));
}

export const productsReducer = createReducer([], (builder) => {
  builder.addCase(setProducts, (state, { payload }) => {
    console.log(payload);
    state = payload;

    return payload;
  });
});
