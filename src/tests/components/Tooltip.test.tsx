import { shallow } from 'enzyme';

import Tooltip from 'components/Tooltip';

it('renders snapshot', () => {
    //@ts-ignore
    const wrapper = shallow(<Tooltip />);
    expect(wrapper).toMatchSnapshot();
});
