import { shallow } from 'enzyme';

import Cart from 'components/Cart';

it('renders correctly', () => {
    const wrapper = shallow(<Cart />);

    expect(wrapper).toMatchSnapshot();
});
