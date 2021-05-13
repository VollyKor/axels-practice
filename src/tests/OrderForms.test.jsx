import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';

import { OrderForms } from 'components';

import theme from '../styled/utils/themeStyles';

const mockStore = configureMockStore();

const store = mockStore({
    geo: {
        lat: 22,
        lng: 32,
    },
});

const getWrapper = () =>
    mount(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <MemoryRouter>
                    <OrderForms />
                </MemoryRouter>
            </ThemeProvider>
        </Provider>
    );

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/cart',
    }),
}));

it('renders correctly', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
});
