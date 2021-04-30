import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher, productsReducer } from "./reducers/products";

const reducer = {
  products: productsReducer,
};

const initialState = {
  products: [],
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  initialState,
});

sagaMiddleware.run(sagaWatcher);

export default store;
