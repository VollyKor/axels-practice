import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { BiLockAlt } from 'react-icons/bi';
import InputMask from 'react-input-mask';

import { Tooltip, CreditCardIcon } from 'components';
import { SubmitButton } from 'styled/ShippingForm';
import { CheckIcon } from 'styled/PaymentForm';

import { initialPaymentFormValues, fieldName } from 'helpers/constants';
import { paymentFormSchema } from 'helpers/validationSchemas';
import { localStorageKey } from 'types/enums';

export default function PaymentForm(): JSX.Element {
    const history = useHistory();

    const cardHolderRef = useRef(null);
    const cardNumberRef = useRef(null);
    const expireDateRef = useRef(null);
    const securityCodeRef = useRef(null);

    const { handleSubmit, getFieldProps, touched, errors, values } = useFormik({
        initialValues: initialPaymentFormValues,

        onSubmit: async (formData) => {
            localStorage.setItem(
                localStorageKey.paymentForm,
                JSON.stringify(formData)
            );

            history.push('/cart/success');
        },
        validationSchema: paymentFormSchema,
    });

    const getWarning: TgetWarningPaymentForm = (field) =>
        errors[field] && touched[field] && 'bg-warning';

    return (
        <>
            <h2 className="ml-4 h4">Payment</h2>
            <Form className="px-1 px-md-4 pt-1 pb-5" onSubmit={handleSubmit}>
                <div className="text-muted d-flex align-items-baseline mb-3">
                    <div className="position-relative ">
                        <BiLockAlt size="25px" />
                        <CheckIcon fill="green" />
                    </div>
                    <small className="ml-2">
                        This is a secure 128-bit SSL encrypted payment
                    </small>
                </div>

                <Form.Group>
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control
                        ref={cardHolderRef}
                        type="name"
                        placeholder="Name as it appears on your card"
                        {...getFieldProps(fieldName.cardholder)}
                        className={getWarning(
                            fieldName.cardholder as PaymentFormKeys
                        )}
                    />

                    <Tooltip
                        fieldName={fieldName.cardholder as PaymentFormKeys}
                        forwardRef={cardHolderRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <div className="div" style={{ position: 'relative' }}>
                        <InputMask
                            mask="9999 9999 9999 9999"
                            {...getFieldProps(fieldName.cardNumber)}
                        >
                            {(props: any) => (
                                <Form.Control
                                    type="tel"
                                    ref={cardNumberRef}
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    className={getWarning(
                                        fieldName.cardNumber as PaymentFormKeys
                                    )}
                                    {...props}
                                />
                            )}
                        </InputMask>

                        <CreditCardIcon value={values.cardNumber} />
                    </div>
                    <Tooltip
                        fieldName={fieldName.cardNumber as PaymentFormKeys}
                        forwardRef={cardNumberRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <Form.Row>
                    <Col md={5}>
                        <Form.Group>
                            <Form.Label>Expire Date</Form.Label>
                            <Form.Control
                                ref={expireDateRef}
                                type="text"
                                placeholder="MM / YY"
                                {...getFieldProps(fieldName.expireDate)}
                                className={getWarning(
                                    fieldName.expireDate as PaymentFormKeys
                                )}
                            />

                            <Tooltip
                                fieldName={
                                    fieldName.expireDate as PaymentFormKeys
                                }
                                forwardRef={expireDateRef}
                                touched={touched}
                                errors={errors}
                            />
                        </Form.Group>
                    </Col>

                    <Col md={5}>
                        <Form.Group>
                            <Form.Label>Security Code</Form.Label>
                            <Form.Control
                                ref={securityCodeRef}
                                type="text"
                                {...getFieldProps(fieldName.securityCode)}
                                className={getWarning(
                                    fieldName.securityCode as PaymentFormKeys
                                )}
                            />

                            <Tooltip
                                fieldName={
                                    fieldName.securityCode as PaymentFormKeys
                                }
                                forwardRef={securityCodeRef}
                                touched={touched}
                                errors={errors}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <SubmitButton type="submit" className="px-4 px-sm-5 py-2">
                    Pay Securely
                </SubmitButton>
            </Form>
        </>
    );
}
