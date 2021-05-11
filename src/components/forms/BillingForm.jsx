import { useRef, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

import { Tooltip, CityInput } from 'components';
import { SubmitButton } from '../../styled/ShippingForm';

import countryList from 'react-select-country-list';
import {
    initialBillingFormValues,
    fieldName,
    localStorageKey,
} from 'helpers/constants';
import getGeo from 'helpers/getGeo';
import { BillingFormValidate } from '../../helpers/validationSchemas';

export default function BillingForm() {
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const GateCodeRef = useRef(null);
    const countryRef = useRef(null);
    const zipCodeRef = useRef(null);

    const history = useHistory();

    const countries = useMemo(() => countryList().getData(), []);

    const { handleSubmit, getFieldProps, touched, errors, values, resetForm } =
        useFormik({
            initialValues: initialBillingFormValues,

            onSubmit: (FormData) => {
                localStorage.setItem(
                    localStorageKey.billingForm,
                    JSON.stringify(FormData)
                );

                history.push('/cart/payment');
            },
            validationSchema: BillingFormValidate,
        });

    const fillForm = async (geo) => {
        const address = await getGeo(geo);
        resetForm({ values: { ...values, ...address } });
    };

    const getWarningStyleBg = (field) =>
        errors[field] && touched[field] && 'bg-warning';

    const handleClick = () => {
        const JsonData = localStorage.getItem(localStorageKey.shippingForm);
        const data = JSON.parse(JsonData);
        resetForm({ values: { ...initialBillingFormValues, ...data } });
    };

    return (
        <>
            <Row className="justify-content-between px-3 align-items-baseline">
                <h2 className="ml-4 h4">Billing Information</h2>
                <Button className="text-muted bg-transparent border-0 p-0">
                    <u className="p-0 h6 ml-1">
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
                    fillForm={fillForm}
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
                                as="select"
                                type="text"
                                ref={countryRef}
                                placeholder="Country"
                                className={getWarningStyleBg(fieldName.country)}
                                {...getFieldProps(fieldName.country)}
                            >
                                <option>{''}</option>
                                {countries.map((el) => (
                                    <option key={el.label}>{el.label}</option>
                                ))}
                            </Form.Control>

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
