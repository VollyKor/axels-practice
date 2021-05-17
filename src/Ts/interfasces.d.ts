interface RootState {
    products: Iproduct[];
    order: Iorder;
    geo: Igeo;
}

interface IinitialGeoState {
    lat: number | null;
    lng: number | null;
}

interface Igeo {
    lat: number;
    lng: number;
}

interface Iresponse<D> {
    data: D;
}

interface Iproduct {
    id: string;
    name: string;
    price: string;
    img: string;
    color: string;
}

interface IinitialPaymentFormValues {
    cardholder: string;
    cardNumber: string;
    expireDate: string;
    securityCode: string;
}

interface InewOrder {
    paymentData: any;
    shippingData: any;
    billingData: any;
}

interface Iorder {
    orderId: string;
    contactEmail: string;
    deliveryDate: string;
}

interface IcommonFormValues {
    fullName: string;
    address: string;
    city: string;
    country: string;
    zip: string;
}

interface IinitialShippingFormValues extends IcommonFormValues {
    phone: string;
    gateCode: string;
}

interface IinitialBillingFormValues extends IcommonFormValues {
    email: string;
    gateCode: string;
}

interface IshippingFormValidate extends IcommonFormValues {
    phone: string;
    gateCode?: string;
}

interface BillingFormValidate extends IcommonFormValues {
    email: string;
    gateCode?: string;
}
