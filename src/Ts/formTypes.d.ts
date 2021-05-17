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

type TgetWarningStyleBgBillingForm = (field: BillingFormKeys) => any;
type TgetWarningStyleBgShippingForm = (field: ShippingFormKeys) => any;
type TgetWarningStyleBgPaymentForm = (field: PaymentFormKeys) => any;

type TfillForm = (geo: Igeo) => Promise<void>;
