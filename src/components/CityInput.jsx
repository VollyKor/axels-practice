import { useState } from 'react';

import Form from 'react-bootstrap/Form';

import { FindButton } from '../styled/CityInput';
import { BiTargetLock } from 'react-icons/bi';
import GoogleModal from './GoodleModal';

export default function CityInput({
    inputRef,
    fillForm,
    value = '',
    ...props
}) {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="position-relative">
                <Form.Group controlId="city" className="position-relative">
                    <Form.Control
                        type="text"
                        placeholder="City"
                        ref={inputRef}
                        value={value}
                        {...props}
                    />
                </Form.Group>

                <FindButton type="button">
                    <BiTargetLock
                        size="25px"
                        color="#5a1094"
                        onClick={() => setShow(!show)}
                    />
                </FindButton>

                <GoogleModal
                    fillForm={fillForm}
                    show={show}
                    onHide={() => setShow(false)}
                />
            </div>
        </>
    );
}
