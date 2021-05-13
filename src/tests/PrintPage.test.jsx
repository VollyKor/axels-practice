import { shallow } from 'enzyme';

import { PrintPage } from 'components';

const email = 'someEmail@gmail.com';
const orderId = '147613178';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/cart',
        search: `?contactEmail=someEmail%40gmail.com&deliveryDate=Monday%201st%20June%202021&orderId=${orderId}`,
    }),
}));

it('renders correctly', async () => {
    const wrapper = shallow(<PrintPage />);
    expect(wrapper).toMatchSnapshot();
});

it('render email', () => {
    const wrapper = shallow(<PrintPage />);

    const link = wrapper.find('a[type="email"]').text();
    expect(link).toContain(`${email}`);
});

it('render orderId', () => {
    const wrapper = shallow(<PrintPage />);

    const text = wrapper.find('p[id="orderId"]').text();
    expect(text).toContain(`Order number is: ${orderId}`);
});
