import { localStorageKey } from './constants';

export const getOrderDataFromLS = () => {
    const paymentData = JSON.parse(
        localStorage.getItem(localStorageKey.paymentForm)
    );
    const shippingData = JSON.parse(
        localStorage.getItem(localStorageKey.shippingForm)
    );
    const billingData = JSON.parse(
        localStorage.getItem(localStorageKey.billingForm)
    );

    return {
        paymentData,
        shippingData,
        billingData,
    };
};
