import { shallow } from 'enzyme';

import Cart from 'components/Cart';

it('renders snapshot', () => {
    const wrapper = shallow(<Cart />);

    expect(wrapper).toMatchSnapshot();
});
