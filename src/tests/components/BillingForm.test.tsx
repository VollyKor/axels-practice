import { shallow } from 'enzyme';

import BillingForm from 'components/forms/BillingForm';

describe('Billing Form test', () => {
    const wrapper = shallow(<BillingForm />);

    it('renders snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
