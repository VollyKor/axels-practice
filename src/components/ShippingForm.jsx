import { useFormik } from 'formik';
import { useRef } from 'react';
import { Form, Col, Overlay, Popover } from 'react-bootstrap';

import { shippingFormValidate } from '../service/validationSchemas';
import { FormPhoneDesc, CityInput, SubmitButton } from '../styled/ShippingForm';
import Tooltip from './Tooltip';

export default function ShippingForm() {
    const fullNameRef = useRef(null);
    const phoneRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const GateCodeRef = useRef(null);
    const countryRef = useRef(null);
    const zipCodeRef = useRef(null);

    const initialValues = {
        fullName: '',
        phone: '',
        address: '',
        gateCode: '',
        city: '',
        zip: '',
        country: '',
    };

    const fieldName = {
        fullName: 'fullName',
        phone: 'phone',
        address: 'address',
        gateCode: 'gateCode',
        city: 'city',
        zip: 'zip',
        country: 'country',
    };

    const { handleSubmit, getFieldProps, touched, errors } = useFormik({
        initialValues,
        onSubmit: (values) => {
            localStorage.setItem('ShippingFormData', JSON.stringify(values));
        },
        validationSchema: shippingFormValidate,
    });

    const getWarningStyleBg = (field) =>
        errors[field] && touched[field] && 'bg-warning';

    return (
        <>
            <h2 className="ml-4">Shipping Info</h2>
            <Form className="p-4" onSubmit={handleSubmit}>
                <Form.Label>Recipient</Form.Label>

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

                <Form.Row className="align-items-center">
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Control
                                type="phone"
                                ref={phoneRef}
                                placeholder="Daytime Phone"
                                className={getWarningStyleBg(fieldName.phone)}
                                {...getFieldProps(fieldName.phone)}
                            />
                            <Tooltip
                                fieldName={fieldName.phone}
                                forwardRef={phoneRef}
                                touched={touched}
                                errors={errors}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                        <FormPhoneDesc className="text-muted">
                            For delivery questions only
                        </FormPhoneDesc>
                    </Col>
                </Form.Row>

                <Form.Label>Address</Form.Label>

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
                                ref={countryRef}
                                placeholder="Country"
                                className={getWarningStyleBg(fieldName.country)}
                                {...getFieldProps(fieldName.country)}
                            />

                            <Tooltip
                                fieldName={fieldName.country}
                                forwardRef={cityRef}
                                touched={touched}
                                errors={errors}
                            />
                        </Form.Group>
                    </Col>

                    <Col lg={5}>
                        <Form.Group controlId="zip">
                            <Form.Control
                                type="text"
                                ref={zipCodeRef}
                                placeholder="ZIP"
                                className={getWarningStyleBg(fieldName.zip)}
                                {...getFieldProps(fieldName.zip)}
                            />

                            <Tooltip
                                fieldName={fieldName.zip}
                                forwardRef={cityRef}
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
