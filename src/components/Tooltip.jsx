import { Overlay, Popover } from 'react-bootstrap';

export default function Tooltip({
    fieldName = '',
    forwardRef,
    touched,
    errors,
}) {
    return fieldName && forwardRef && touched && errors ? (
        <Overlay
            target={forwardRef?.current}
            show={touched[fieldName] && !!errors[fieldName]}
            placement="top"
        >
            <Popover className="bg-white text-danger p-1 px-3 border-none shadow">
                {errors.fullName}
            </Popover>
        </Overlay>
    ) : (
        'Error, Some props are missing fro Tooltip'
    );
}
