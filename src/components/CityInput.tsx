import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { BiTargetLock } from 'react-icons/bi';

import GoogleModal from 'components/GoodleModal';
import { FindButton } from 'styled/CityInput';

interface Props {
    inputRef: Ref;
    fillForm: TfillForm;
    value?: string;
    className?: string;
}

const CityInput = ({
    inputRef,
    fillForm,
    value = '',
    ...props
}: Props): JSX.Element => {
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
};

export default CityInput;
