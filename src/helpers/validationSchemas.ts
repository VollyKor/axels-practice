import * as Yup from 'yup';
import valid from 'card-validator';

const phoneValidationRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const shippingFormValidate: Yup.SchemaOf<IshippingFormValidate> =
    Yup.object({
        fullName: Yup.string().min(3).max(40).required('Field is Required'),
        phone: Yup.string()
            .matches(phoneValidationRegExp, 'Phone number is invalid')
            .required('Field is Required'),
        address: Yup.string().min(2).max(30).required('Field is Required'),
        city: Yup.string().min(2).max(30).required('Field is Required'),
        gateCode: Yup.string().optional().optional(),
        country: Yup.string().min(3).max(30).required(),
        zip: Yup.string().min(4).max(10).required(),
    });

export const BillingFormValidate: Yup.SchemaOf<BillingFormValidate> =
    Yup.object({
        fullName: Yup.string().min(3).max(40).required('Field is Required'),
        email: Yup.string().email().required(),
        address: Yup.string().min(2).max(30).required('Field is Required'),
        city: Yup.string().min(2).max(30).required('Field is Required'),
        gateCode: Yup.string().optional().optional(),
        country: Yup.string().min(3).max(30).required(),
        zip: Yup.string().min(4).max(10).required(),
    });

export const PaymentFormValidate: Yup.SchemaOf<IinitialPaymentFormValues> =
    Yup.object({
        cardholder: Yup.string().min(3).max(40).required('Field is Required'),
        cardNumber: Yup.string()
            .test(
                'test-number',
                'Credit Card number is invalid',
                (value) => valid.number(value).isPotentiallyValid
            )
            .required(),

        expireDate: Yup.string()
            .test(
                'test-expireDate',
                'ExpireDate is invalid',
                (value) => valid.expirationDate(value).isPotentiallyValid
            )
            .required(),

        securityCode: Yup.string()
            .test(
                'test-expireDate',
                'ExpireDate is invalid',
                (value) => valid.cvv(value).isPotentiallyValid
            )
            .required(),
    });
