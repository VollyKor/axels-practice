import { useFormik } from 'formik';
import { useRef } from 'react';
import { Form, Col, Overlay, Popover } from 'react-bootstrap';
import { shippingFormValidate } from '../service/validationSchemas';

import { FormPhoneDesc, CityInput, SubmitButton } from '../styled/ShippingForm';

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

    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        getFieldProps,
        touched,
        errors,
    } = useFormik({
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

                <Form.Group controlId="name">
                    <Form.Control
                        ref={fullNameRef}
                        type="name"
                        placeholder="Full name"
                        {...getFieldProps('fullName')}
                        className={getWarningStyleBg('fullName')}
                    />

                    <Overlay
                        target={fullNameRef.current}
                        show={touched.fullName && !!errors.fullName}
                        placement="top"
                    >
                        <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                            {errors.fullName}
                        </Popover>
                    </Overlay>
                </Form.Group>

                <Form.Row className="align-items-center">
                    <Col lg={6}>
                        <Form.Group controlId="phone">
                            <Form.Control
                                type="phone"
                                ref={phoneRef}
                                placeholder="Daytime Phone"
                                className={getWarningStyleBg('phone')}
                                {...getFieldProps('phone')}
                            />

                            <Overlay
                                target={phoneRef.current}
                                show={touched.phone && !!errors.phone}
                                placement="top-start"
                                className="bg-primary"
                            >
                                <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                                    {errors.phone}
                                </Popover>
                            </Overlay>
                        </Form.Group>
                    </Col>

                    <Col lg={4}>
                        <FormPhoneDesc className="text-muted">
                            For delivery questions only
                        </FormPhoneDesc>
                    </Col>
                </Form.Row>

                <Form.Label>Address</Form.Label>

                <Form.Group controlId="address">
                    <Form.Control
                        ref={addressRef}
                        type="text"
                        placeholder="Street Address"
                        {...getFieldProps('address')}
                        className={getWarningStyleBg('address')}
                    />

                    <Overlay
                        target={addressRef.current}
                        show={touched.address && !!errors.address}
                        placement="top-start"
                        className="bg-primary"
                    >
                        <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                            {errors.address}
                        </Popover>
                    </Overlay>
                </Form.Group>

                <Form.Group controlId="gate-code">
                    <Form.Control
                        type="text"
                        name="gateCode"
                        ref={GateCodeRef}
                        placeholder="Apt, Suit, Bldg, Gate Code. (optional)"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gateCode}
                        className={errors.gateCode && 'bg-warning'}
                    />

                    <Overlay
                        target={GateCodeRef.current}
                        show={touched.gateCode && !!errors.gateCode}
                        placement="top-start"
                        className="bg-primary"
                    >
                        <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                            {errors.gateCode}
                        </Popover>
                    </Overlay>
                </Form.Group>

                <CityInput
                    inputRef={cityRef}
                    className={getWarningStyleBg('city')}
                    {...getFieldProps('city')}
                />

                <Overlay
                    target={cityRef.current}
                    show={touched.city && !!errors.city}
                    placement="top"
                    className="bg-primary"
                >
                    <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                        {errors.city}
                    </Popover>
                </Overlay>

                <Form.Row>
                    <Col lg={7}>
                        <Form.Group controlId="country">
                            <Form.Control
                                type="text"
                                ref={countryRef}
                                placeholder="Country"
                                className={getWarningStyleBg('country')}
                                {...getFieldProps('country')}
                            />

                            <Overlay
                                target={countryRef.current}
                                show={touched.country && !!errors.country}
                                placement="bottom-start"
                                className="bg-primary"
                            >
                                <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                                    {errors.country}
                                </Popover>
                            </Overlay>
                        </Form.Group>
                    </Col>

                    <Col lg={5}>
                        <Form.Group controlId="zip">
                            <Form.Control
                                type="text"
                                ref={zipCodeRef}
                                placeholder="ZIP"
                                className={getWarningStyleBg('zip')}
                                {...getFieldProps('zip')}
                            />

                            <Overlay
                                target={zipCodeRef.current}
                                show={touched.zip && !!errors.zip}
                                placement="top-end"
                                className="bg-primary"
                            >
                                <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                                    {errors.zip}
                                </Popover>
                            </Overlay>
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
