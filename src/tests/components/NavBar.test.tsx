import { shallow } from 'enzyme';

import Navbar from 'components/Navbar';

it('renders snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
});

// Work incorrect
test('testing route links', () => {
    const wrapper = shallow(<Navbar />);

    const Cart = wrapper.find('CartLink');
    expect(Cart.exists()).toBe(true);
});
