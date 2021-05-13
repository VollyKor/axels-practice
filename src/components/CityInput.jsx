import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { BiTargetLock } from 'react-icons/bi';

import { FindButton } from '../styled/CityInput';
import GoogleModal from './GoodleModal';

export default function CityInput({
    inputRef,
    fillForm,
    value = '',
    ...props
}) {
    const [show, setShow] = useState(false);

    return (
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

            <FindButton type="button" onClick={() => setShow(!show)}>
                <BiTargetLock size="25px" color="#5a1094" />
            </FindButton>

            <GoogleModal
                fillForm={fillForm}
                show={show}
                onHide={() => setShow(false)}
            />
        </div>
    );
}
