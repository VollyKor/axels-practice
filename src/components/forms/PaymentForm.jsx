import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import Autocomplete from 'react-google-autocomplete';

import { Tooltip } from 'components';
import { SubmitButton } from '../../styled/ShippingForm';
import { CheckIcon } from '../../styled/PaymentForm';
import { BiLockAlt } from 'react-icons/bi';

import {
    initialPaymentFormValues,
    fieldName,
    localStorageKey,
} from 'helpers/constants';
import { PaymentFormValidate } from '../../helpers/validationSchemas';

export default function PaymentForm() {
    const history = useHistory();

    const cardHolderRef = useRef(null);
    const cardNumberRef = useRef(null);
    const expireDateRef = useRef(null);
    const securityCodeRef = useRef(null);

    const { handleSubmit, getFieldProps, touched, errors } = useFormik({
        initialValues: initialPaymentFormValues,

        onSubmit: async (formData) => {
            localStorage.setItem(
                localStorageKey.paymentForm,
                JSON.stringify(formData)
            );

            history.push('/cart/success');
        },
        validationSchema: PaymentFormValidate,
    });

    const getWarningStyleBg = (field) =>
        errors[field] && touched[field] && 'bg-warning';

    return (
        <>
            <Row>
                <h2 className="ml-4">Payment</h2>
                <Form className="px-4 pt-1 pb-5" onSubmit={handleSubmit}>
                    <div className="text-muted d-flex align-items-baseline ">
                        <div className="position-relative mb-3">
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
                            className={getWarningStyleBg(fieldName.cardholder)}
                        />

                        <Tooltip
                            fieldName={fieldName.cardholder}
                            forwardRef={cardHolderRef}
                            touched={touched}
                            errors={errors}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                            ref={cardNumberRef}
                            type="tel"
                            inputMode="numeric"
                            placeholder="XXXX XXXX XXXX XXXX"
                            {...getFieldProps(fieldName.cardNumber)}
                            className={getWarningStyleBg(fieldName.cardNumber)}
                        />

                        <Tooltip
                            fieldName={fieldName.cardNumber}
                            forwardRef={cardNumberRef}
                            touched={touched}
                            errors={errors}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Expire Date</Form.Label>
                                <Form.Control
                                    ref={expireDateRef}
                                    type="text"
                                    placeholder="MM / YY"
                                    {...getFieldProps(fieldName.expireDate)}
                                    className={getWarningStyleBg(
                                        fieldName.expireDate
                                    )}
                                />

                                <Tooltip
                                    fieldName={fieldName.expireDate}
                                    forwardRef={expireDateRef}
                                    touched={touched}
                                    errors={errors}
                                />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Security Code</Form.Label>
                                <Form.Control
                                    ref={securityCodeRef}
                                    type="text"
                                    {...getFieldProps(fieldName.securityCode)}
                                    className={getWarningStyleBg(
                                        fieldName.securityCode
                                    )}
                                />

                                <Tooltip
                                    fieldName={fieldName.securityCode}
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
            </Row>
        </>
    );
}
