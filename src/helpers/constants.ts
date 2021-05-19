export const fieldName = {
    email: 'email',
    fullName: 'fullName',
    phone: 'phone',
    address: 'address',
    gateCode: 'gateCode',
    city: 'city',
    zip: 'zip',
    country: 'country',
    cardholder: 'cardholder',
    cardNumber: 'cardNumber',
    expireDate: 'expireDate',
    securityCode: 'securityCode',
};

export const formType = {
    Shipping: 'Shipping',
    Billing: 'Billing',
    Payment: 'Payment',
};

export const initialShippingFormValues: IinitialShippingFormValues = {
    fullName: '',
    phone: '',
    address: '',
    gateCode: '',
    city: '',
    zip: '',
    country: '',
};

export const initialBillingFormValues: IinitialBillingFormValues = {
    fullName: '',
    email: '',
    address: '',
    gateCode: '',
    city: '',
    zip: '',
    country: '',
};

export const initialPaymentFormValues: IinitialPaymentFormValues = {
    cardholder: '',
    cardNumber: '',
    expireDate: '',
    securityCode: '',
};
