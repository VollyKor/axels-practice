import { shallow } from 'enzyme';

import CartLink from 'components/CartLink';

it('renders correctly', () => {
    const wrapper = shallow(<CartLink productsInCart={3} />);

    expect(wrapper).toMatchSnapshot();
});

it('render default props correctly', () => {
    const wrapper = shallow(<CartLink />);

    const element = wrapper.find('span').text();
    expect(element).toContain(`0`);
});

it('render props correctly', () => {
    const productsInCart = 3;

    const wrapper = shallow(<CartLink productsInCart={productsInCart} />);

    const element = wrapper.find('span').text();
    expect(element).toContain(`3`);
});
