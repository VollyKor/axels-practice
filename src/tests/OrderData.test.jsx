import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import OrderData from 'components/OrderData';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

const store = mockStore({
    order: {
        orderId: '123',
        contactEmail: '',
        deliveryDate: '',
    },
    startup: { complete: false },
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
    it('renders correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper).toMatchSnapshot();
    });

    // it('should render a startup component if startup is not complete', () => {
    //     const wrapper = getWrapper();
    //     expect(wrapper.find('p.font-weight-bold').text()).toIncludeText(
    //         '123'
    //     );
    // });
});
