import { shallow } from 'enzyme';

import CartLink from 'components/CartLink';

it('renders snapshot', () => {
    const wrapper = shallow(<CartLink cartCount={3} />);

    expect(wrapper).toMatchSnapshot();
});

it('render default props correctly', () => {
    const wrapper = shallow(<CartLink />);

    const element = wrapper.find('span').text();
    expect(element).toContain(`0`);
});

it('render props correctly', () => {
    const cartCount = 3;

    const wrapper = shallow(<CartLink cartCount={cartCount} />);

    const element = wrapper.find('span').text();
    expect(element).toContain(`3`);
});
