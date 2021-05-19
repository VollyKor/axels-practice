import { shallow } from 'enzyme';

import NavBarLink from 'components/NavBarLink';

it('renders snapshot', () => {
    const wrapper = shallow(<NavBarLink children to={'/'} />);
    expect(wrapper).toMatchSnapshot();
});
