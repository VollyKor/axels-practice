export const formType = {
    Shipping: 'Shipping',
    Billing: 'Billing',
    Payment: 'Payment',
};

export const initialShippingFormValues = {
    fullName: '',
    phone: '',
    address: '',
    gateCode: '',
    city: '',
    zip: '',
    country: '',
};

export const initialBillingFormValues = {
    fullName: '',
    email: '',
    address: '',
    gateCode: '',
    city: '',
    zip: '',
    country: '',
};

export const fieldName = {
    email: 'email',
    fullName: 'fullName',
    phone: 'phone',
    address: 'address',
    gateCode: 'gateCode',
    city: 'city',
    zip: 'zip',
    country: 'country',
};

export const localStorageKey = {
    shippingForm: 'shippingForm',
    billingForm: 'billingForm',
    paymentForm: 'paymentForm',
};
