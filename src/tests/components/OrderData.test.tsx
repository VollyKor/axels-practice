import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import createSagaMiddleware from 'redux-saga';

import OrderData from 'components/OrderData';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

const store = mockStore({
    order: {
        orderId: '123',
        contactEmail: '',
        deliveryDate: '',
    },
});

const getWrapper = () =>
    mount(
        <Provider store={store}>
            <MemoryRouter>
                <OrderData />
            </MemoryRouter>
        </Provider>
    );

describe('OrderData testing', () => {
    it('renders snapshot', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });

    afterEach(cleanup);

    it('should render a data from state correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper.first().text()).toContain(`Order number is: 123`);
    });
});
