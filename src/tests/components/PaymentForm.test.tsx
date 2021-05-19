import { shallow } from 'enzyme';

import PaymentForm from 'components/forms/PaymentForm';

it('renders snapshot', () => {
    const wrapper = shallow(<PaymentForm />);
    expect(wrapper).toMatchSnapshot();
});
