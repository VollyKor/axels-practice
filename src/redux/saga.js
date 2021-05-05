import { createAction } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";

import { getProducts } from "./reducers/products";

export const GET_PRODUCTS = createAction("GET_PRODUCTS");

export default function* sagaWatcher() {
  yield takeEvery("GET_PRODUCTS", getProducts);
}
