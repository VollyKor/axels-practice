import { fireEvent, waitFor } from '@testing-library/react';

import BillingForm from 'components/forms/BillingForm';
import { localStorageKey } from 'types/enums';
import { render } from '../utils/customRender';

const formData = {
    fullName: 'Vol Kor',
    email: 'test@email.com',
    address: 'Zakri 21',
    gateCode: '72',
    city: 'Kiev',
    zip: '02223',
    country: 'Ukraine',
};

describe('Billing Form test', () => {
    it('match snapshot', () => {
        const wrapper = render(<BillingForm />);
        expect(wrapper).toMatchSnapshot();
    });

    it('get data from LocalStorage', async () => {
        const component = render(<BillingForm />);

        localStorage.setItem(
            localStorageKey.shippingForm,
            JSON.stringify(formData)
        );

        const input = await component.findByPlaceholderText('Full name');
        const btn = await component.findByText('Same as Shipping');

        fireEvent.click(btn);

        expect(input.value).toEqual(formData.fullName);
    });

    it('save data to LocalStorage', async () => {
        const component = render(<BillingForm />, { route: '/cart' });

        const inputName = await component.findByPlaceholderText('Full name');
        const inputEmail = await component.findByPlaceholderText(
            'Email Address'
        );
        const inputAddress = await component.findByPlaceholderText(
            'Street Address'
        );
        const inputBuild = await component.findByPlaceholderText(
            'Apt, Suit, Bldg, Gate Code. (optional)'
        );
        const inputCountry = await component.findByPlaceholderText('Country');
        const inputCity = await component.findByPlaceholderText('City');
        const inputZIP = await component.findByPlaceholderText('ZIP');

        const btn = document.querySelector('button[type="submit"]');

        fireEvent.change(inputName, { target: { value: formData.fullName } });
        fireEvent.change(inputEmail, { target: { value: formData.email } });
        fireEvent.change(inputAddress, { target: { value: formData.address } });
        fireEvent.change(inputBuild, { target: { value: formData.gateCode } });
        fireEvent.change(inputCountry, { target: { value: formData.country } });
        fireEvent.change(inputCity, { target: { value: formData.city } });
        fireEvent.change(inputZIP, { target: { value: formData.zip } });

        await waitFor(() => {
            fireEvent.click(btn);
        });

        expect(
            JSON.parse(localStorage.getItem(localStorageKey.billingForm))
        ).toEqual(formData);
    });
});
