import { localStorageKey } from 'Ts/enums';

export const getOrderDataFromLS = () => {
    const paymentDataJson = localStorage.getItem(localStorageKey.paymentForm);
    const shippingDataJson = localStorage.getItem(localStorageKey.shippingForm);
    const billingDataJson = localStorage.getItem(localStorageKey.billingForm);

    let paymentData = null;
    let shippingData = null;
    let billingData = null;

    if (paymentDataJson) paymentData = JSON.parse(paymentDataJson);
    if (shippingDataJson) paymentData = JSON.parse(shippingDataJson);
    if (billingDataJson) paymentData = JSON.parse(billingDataJson);

    return {
        paymentData,
        shippingData,
        billingData,
    };
};
