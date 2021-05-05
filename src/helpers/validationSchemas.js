import * as Yup from 'yup';

const phoneValidationRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const shippingFormValidate = Yup.object({
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

export const BillingFormValidate = Yup.object({
    fullName: Yup.string().min(3).max(40).required('Field is Required'),
    email: Yup.string().email().required(),
    address: Yup.string().min(2).max(30).required('Field is Required'),
    city: Yup.string().min(2).max(30).required('Field is Required'),
    gateCode: Yup.string().optional().optional(),
    country: Yup.string().min(3).max(30).required(),
    zip: Yup.string().min(4).max(10).required(),
});
