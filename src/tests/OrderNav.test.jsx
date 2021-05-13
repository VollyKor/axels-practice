import { shallow } from 'enzyme';

import { OrderNav } from 'components';

it('renders correctly', () => {
    const wrapper = shallow(<OrderNav />);

    expect(wrapper).toMatchSnapshot();
});
