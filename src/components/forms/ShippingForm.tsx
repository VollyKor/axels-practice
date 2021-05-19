import { useRef, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';

import { CityInput, Tooltip } from 'components';
import { FormPhoneDesc, SubmitButton } from 'styled/ShippingForm';

import { initialShippingFormValues, fieldName } from 'helpers/constants';
import getGeo from 'helpers/getGeo';
import { shippingFormValidate } from 'helpers/validationSchemas';
import countryList from 'react-select-country-list';
import { localStorageKey } from 'types/enums';

export default function ShippingForm() {
    const fullNameRef = useRef(null);
    const phoneRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const GateCodeRef = useRef(null);
    const countryRef = useRef(null);
    const zipCodeRef = useRef(null);

    const history = useHistory();

    const countries = useMemo(() => countryList().getData(), []);

    const { handleSubmit, getFieldProps, values, touched, errors, resetForm } =
        useFormik({
            initialValues: initialShippingFormValues,
            onSubmit: (FormData) => {
                localStorage.setItem(
                    localStorageKey.shippingForm,
                    JSON.stringify(FormData)
                );

                history.push('/cart/billing');
            },
            validationSchema: shippingFormValidate,
        });

    const fillForm: TfillForm = async (geo) => {
        const address = await getGeo(geo);
        resetForm({ values: { ...values, ...address } });
    };

    const getWarningStyleBg: TgetWarningStyleBgShippingForm = (field) =>
        errors[field] && touched[field] && 'bg-warning';

    return (
        <>
            <h2 className="ml-4 h4">Shipping Info</h2>
            <Form className="px-1 px-md-4 pt-1 pb-5" onSubmit={handleSubmit}>
                <Form.Label>Recipient</Form.Label>

                <Form.Group>
                    <Form.Control
                        ref={fullNameRef}
                        type="name"
                        placeholder="Full name"
                        {...getFieldProps(fieldName.fullName)}
                        className={getWarningStyleBg(
                            fieldName.fullName as ShippingFormKeys
                        )}
                    />
                    <Tooltip
                        fieldName={fieldName.fullName as ShippingFormKeys}
                        forwardRef={fullNameRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <Form.Row className="align-items-center">
                    <Col lg={7}>
                        <Form.Group>
                            <InputMask
                                mask="(999) 999-99-99"
                                {...getFieldProps(fieldName.phone)}
                            >
                                {(props: any) => (
                                    <Form.Control
                                        type="phone"
                                        ref={phoneRef}
                                        placeholder="Daytime Phone"
                                        className={getWarningStyleBg(
                                            fieldName.phone as ShippingFormKeys
                                        )}
                                        {...props}
                                    />
                                )}
                            </InputMask>

                            <Tooltip
                                fieldName={fieldName.phone as ShippingFormKeys}
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
                        className={getWarningStyleBg(
                            fieldName.address as ShippingFormKeys
                        )}
                    />

                    <Tooltip
                        fieldName={fieldName.address as ShippingFormKeys}
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
                        className={getWarningStyleBg(
                            fieldName.gateCode as ShippingFormKeys
                        )}
                    />

                    <Tooltip
                        fieldName={fieldName.gateCode as ShippingFormKeys}
                        forwardRef={GateCodeRef}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>

                <CityInput
                    inputRef={cityRef}
                    fillForm={fillForm}
                    className={getWarningStyleBg(
                        fieldName.city as ShippingFormKeys
                    )}
                    {...getFieldProps(fieldName.city)}
                />

                <Tooltip
                    fieldName={fieldName.city as ShippingFormKeys}
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
                                className={getWarningStyleBg(
                                    fieldName.country as ShippingFormKeys
                                )}
                                {...getFieldProps(fieldName.country)}
                            >
                                <option>{''}</option>
                                {countries.map((el) => (
                                    <option key={el.label}>{el.label}</option>
                                ))}
                            </Form.Control>

                            <Tooltip
                                fieldName={
                                    fieldName.country as ShippingFormKeys
                                }
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
                                className={getWarningStyleBg(
                                    fieldName.zip as ShippingFormKeys
                                )}
                                {...getFieldProps(fieldName.zip)}
                            />

                            <Tooltip
                                fieldName={fieldName.zip as ShippingFormKeys}
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
