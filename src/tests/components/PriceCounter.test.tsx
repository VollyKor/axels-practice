import { shallow } from 'enzyme';

import PriceCounter from 'components/PriceCounter';

it('renders snapshot', () => {
    const wrapper = shallow(<PriceCounter price={20} />);

    expect(wrapper).toMatchSnapshot();
});

it('render props correctly', () => {
    const price = 20;

    const wrapper = shallow(<PriceCounter price={price} />);

    const text = wrapper.text();
    expect(text).toContain(`Taxes${price}`);
});
