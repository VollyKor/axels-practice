import { shallow } from 'enzyme';

import { OrderNav } from 'components';

it('renders snapshot', () => {
    const wrapper = shallow(<OrderNav />);

    expect(wrapper).toMatchSnapshot();
});
