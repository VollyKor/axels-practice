import { useState } from 'react';

import { ShippingForm, BillingForm, PaymentForm, OrderNav } from 'components';

import { formType } from '../helpers/constants';

export default function OrderForms() {
    const [currentForm, setCurrentForm] = useState(formType.Shipping);

    const renderForm = () => {
        switch (currentForm) {
            case formType.Shipping:
                return <ShippingForm setCurrentForm={setCurrentForm} />;
            case formType.Billing:
                return <BillingForm setCurrentForm={setCurrentForm} />;
            case formType.Payment:
                return <PaymentForm setCurrentForm={setCurrentForm} />;
            default:
                return <div>{'Error Form not found'}</div>;
        }
    };

    return (
        <>
            <OrderNav
                currentForm={currentForm}
                setCurrentForm={setCurrentForm}
            />
            {renderForm()}
        </>
    );
}