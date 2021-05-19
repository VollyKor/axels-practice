import { shallow } from 'enzyme';

import Conditions from 'components/Conditions';

it('renders coorectly', () => {
    const wrapper = shallow(<Conditions />);
    expect(wrapper).toMatchSnapshot();
});
