type Ref =
    | ((instance: HTMLInputElement | null) => void)
    | RefObject<HTMLInputElement>
    | null
    | undefined;

type FieldNAmeTypes =
    | keyof IinitialShippingFormValues
    | keyof IinitialBillingFormValues
    | keyof IinitialPaymentFormValues;

type BillingFormKeys = keyof IinitialBillingFormValues;
type ShippingFormKeys = keyof IinitialShippingFormValues;
type PaymentFormKeys = keyof IinitialPaymentFormValues;

type TgetWarningBillingForm = (field: BillingFormKeys) => any;
type TgetWarningShippingForm = (field: ShippingFormKeys) => any;
type TgetWarningPaymentForm = (field: PaymentFormKeys) => any;

type TfillForm = (geo: Igeo) => Promise<void>;

type TformikTouched =
    | FormikTouched<IinitialShippingFormValues>
    | FormikTouched<IinitialBillingFormValues>
    | FormikTouched<IinitialPaymentFormValues>;

type TformikErrors =
    | FormikErrors<IinitialShippingFormValues>
    | FormikErrors<IinitialBillingFormValues>
    | FormikErrors<IinitialPaymentFormValues>;
