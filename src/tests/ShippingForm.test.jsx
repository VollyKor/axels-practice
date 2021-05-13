import { shallow } from 'enzyme';

import ShippingForm from 'components/forms/ShippingForm';

it('renders correctly', () => {
    const wrapper = shallow(<ShippingForm />);
    expect(wrapper).toMatchSnapshot();
});

// Example
//  Doesn't work
// it('should update fullname field on change', () => {
//     const wrapper = shallow(<BillingForm />);
//     const emailInput = wrapper.find("FormControl[name='fullName']");
//     emailInput.simulate('change', {
//         persist: () => {},
//         target: {
//             name: 'fullName',
//             value: 'Vol Kor',
//         },
//     });
//     wrapper.update();
//     expect(emailInput.html()).toMatch('Vol Kor');
// });
