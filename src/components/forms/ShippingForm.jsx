import { useRef, useEffect, useState, useMemo } from 'react';
import { Form, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Tooltip } from 'components';
import { usePlacesWidget } from 'react-google-autocomplete';
import countryList from 'react-select-country-list';

import { FormPhoneDesc, CityInput, SubmitButton } from 'styled/ShippingForm';

import {
    formType,
    initialShippingFormValues,
    fieldName,
    localStorageKey,
} from 'helpers/constants';
import getGeo from 'helpers/getGeo';
import { shippingFormValidate } from 'helpers/validationSchemas';

const { REACT_APP_GOOGLE_API_KEY } = process.env;

export default function ShippingForm({ setCurrentForm }) {
    const [geoposition, setGeoposition] = useState(null);
    const [address, setAddress] = useState(null);

    const options = useMemo(() => countryList().getData(), []);
    console.log(options);
    const fullNameRef = useRef(null);
    const phoneRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const GateCodeRef = useRef(null);
    const countryRef = useRef(null);
    const zipCodeRef = useRef(null);

    const {
        handleSubmit,
        setFieldValue,
        getFieldProps,
        touched,
        errors,
        resetForm,
    } = useFormik({
        initialValues: initialShippingFormValues,
        onSubmit: (FormData) => {
            localStorage.setItem(
                localStorageKey.shippingForm,
                JSON.stringify(FormData)
            );
            setCurrentForm(formType.Billing);
        },
        validationSchema: shippingFormValidate,
    });

    const { ref } = usePlacesWidget({
        apiKey: REACT_APP_GOOGLE_API_KEY,
        options: {
            types: ['(country)'],
            componentRestrictions: { country: 'ua' },
        },
        onPlaceSelected: (place) => {
            console.log(place);
            setFieldValue(fieldName.country, place.formatted_address);
        },
    });

    useEffect(() => {
        if (!geoposition) {
            navigator.geolocation.getCurrentPosition((position) =>
                setGeoposition(position)
            );
        }

        getGeo(geoposition, setAddress);
    }, [geoposition]);

    useEffect(() => {
        if (address) {
            resetForm({ values: { ...initialShippingFormValues, ...address } });
        }
    }, [address, resetForm]);

    const getWarningStyleBg = (field) =>
        errors[field] && touched[field] && 'bg-warning';

    return (
        <>
            <h2 className="ml-4">Shipping Info</h2>
            <Form className="p-4" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control ref={ref} />
                </Form.Group>
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
                                as="select"
                                type="text"
                                ref={countryRef}
                                placeholder="Country"
                                className={getWarningStyleBg(fieldName.country)}
                                {...getFieldProps(fieldName.country)}
                            >
                                {options.map((el) => (
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
                                ref={zipCodeRef}
                                placeholder="ZIP"
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
