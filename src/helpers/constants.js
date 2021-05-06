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

export const initialPaymentFormValues = {
    cardholder: '',
    cardNumber: '',
    expireDate: '',
    securityCode: '',
};

export const localStorageKey = {
    shippingForm: 'shippingForm',
    billingForm: 'billingForm',
    paymentForm: 'paymentForm',
};

export const GOOGLE_API_KEY = 'AIzaSyDPIS2UR-D2XnG-hIW5SJIAXJ4mKcpK5XY';
