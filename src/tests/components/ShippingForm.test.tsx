import { shallow } from 'enzyme';

import ShippingForm from 'components/forms/ShippingForm';

it('renders snapshot', () => {
    const wrapper = shallow(<ShippingForm />);
    expect(wrapper).toMatchSnapshot();
});
