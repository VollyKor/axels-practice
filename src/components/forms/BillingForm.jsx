import { useRef } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

import { Tooltip } from 'components';
import { CityInput, SubmitButton } from '../../styled/ShippingForm';

import {
    formType,
    initialBillingFormValues,
    fieldName,
    localStorageKey,
} from 'helpers/constants';
import { BillingFormValidate } from '../../helpers/validationSchemas';

export default function BillingForm({ setCurrentForm }) {
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const GateCodeRef = useRef(null);
    const countryRef = useRef(null);
    const zipCodeRef = useRef(null);

    const {
        handleSubmit,
        getFieldProps,
        touched,
        errors,
        resetForm,
    } = useFormik({
        initialValues: initialBillingFormValues,
        onSubmit: (FormData) => {
            localStorage.setItem(
                localStorageKey.billingForm,
                JSON.stringify(FormData)
            );

            setCurrentForm(formType.Payment);
            console.log('click');
        },
        validationSchema: BillingFormValidate,
    });

    const getWarningStyleBg = (field) =>
        errors[field] && touched[field] && 'bg-warning';

    const handleClick = () => {
        const JsonData = localStorage.getItem(localStorageKey.shippingForm);
        const data = JSON.parse(JsonData);
        resetForm({ values: { ...initialBillingFormValues, ...data } });
    };

    return (
        <>
            <Row className="justify-content-between pt-3 px-3 mt-2 align-items-baseline">
                <h2 className="ml-4">Billing Information</h2>
                <Button className="text-muted bg-transparent border-0 p-0">
                    <u className="p-0 h6 ml-4">
                        <small onClick={handleClick}>Same as Shipping</small>
                    </u>
                </Button>
            </Row>

            <Form className="p-4" onSubmit={handleSubmit}>
                <Form.Label>Billing Contact</Form.Label>

                <Form.Group>
                    <Form.Control
                        ref={fullNameRef}
                        type="name"
                        placeholder="Full name"
                        {...getFieldProps(fieldName.fullName)}
                        className={getWarningStyleBg(fieldName.fullName)}
                    />

                    <Tooltip
                        fieldName={fieldName.fullName}
                        forwardRef={fullNameRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="email"
                        ref={emailRef}
                        placeholder="Email Address"
                        className={getWarningStyleBg(fieldName.email)}
                        {...getFieldProps(fieldName.email)}
                    />

                    <Tooltip
                        fieldName={fieldName.email}
                        forwardRef={emailRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <Form.Label>Billing Address</Form.Label>

                <Form.Group>
                    <Form.Control
                        ref={addressRef}
                        type="text"
                        placeholder="Street Address"
                        {...getFieldProps(fieldName.address)}
                        className={getWarningStyleBg(fieldName.address)}
                    />

                    <Tooltip
                        fieldName={fieldName.address}
                        forwardRef={addressRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="text"
                        ref={GateCodeRef}
                        placeholder="Apt, Suit, Bldg, Gate Code. (optional)"
                        {...getFieldProps(fieldName.gateCode)}
                        className={getWarningStyleBg(fieldName.gateCode)}
                    />

                    <Tooltip
                        fieldName={fieldName.gateCode}
                        forwardRef={GateCodeRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <CityInput
                    inputRef={cityRef}
                    className={getWarningStyleBg(fieldName.city)}
                    {...getFieldProps(fieldName.city)}
                />

                <Tooltip
                    fieldName={fieldName.city}
                    forwardRef={cityRef}
                    touched={touched}
                    errors={errors}
                />

                <Form.Row>
                    <Col lg={7}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Country"
                                ref={countryRef}
                                className={getWarningStyleBg(fieldName.country)}
                                {...getFieldProps(fieldName.country)}
                            />

                            <Tooltip
                                fieldName={fieldName.country}
                                forwardRef={countryRef}
                                touched={touched}
                                errors={errors}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={5}>
                        <Form.Group controlId="zip">
                            <Form.Control
                                type="text"
                                placeholder="ZIP"
                                ref={zipCodeRef}
                                className={getWarningStyleBg(fieldName.zip)}
                                {...getFieldProps(fieldName.zip)}
                            />

                            <Tooltip
                                fieldName={fieldName.zip}
                                forwardRef={zipCodeRef}
                                touched={touched}
                                errors={errors}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <SubmitButton type="submit" className="px-4 px-sm-5 py-2">
                    Continue
                </SubmitButton>
            </Form>
        </>
    );
}
