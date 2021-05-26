import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import { LocalStorageMock } from '@react-mock/localstorage';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import reducer from 'redux/rootReducer';
import sagaWatcher from 'redux/saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

function render(
    ui,
    {
        ls = {},
        routerState = {},
        route = '/',
        path = '/',
        ...renderOptions
    } = {}
) {
    const Wrapper = ({ children }) => {
        window.history.pushState(routerState, 'Test page', route);
        sagaMiddleware.run(sagaWatcher);

        return (
            <LocalStorageMock items={ls}>
                <MemoryRouter initialEntries={[route]}>
                    <Provider store={store}>{children}</Provider>
                </MemoryRouter>
            </LocalStorageMock>
        );
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export { render };
