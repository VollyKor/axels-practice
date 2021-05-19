import { Overlay, Popover } from 'react-bootstrap';

interface Props {
    fieldName: FieldNAmeTypes | '';
    forwardRef: React.MutableRefObject<any>;
    touched: TformikTouched;
    errors: TformikErrors;
}

const Tooltip = ({ fieldName = '', forwardRef, touched, errors }: Props) => {
    return fieldName && forwardRef && touched && errors ? (
        <Overlay
            target={forwardRef?.current}
            show={touched[fieldName] && !!errors[fieldName]}
            placement="top"
        >
            <Popover
                id={`${fieldName} ${Date.now()}`}
                className="bg-white text-danger p-1 px-3 border-none shadow"
            >
                {errors[fieldName]}
            </Popover>
        </Overlay>
    ) : (
        <div>'Error, Some props are missing from Tooltip'</div>
    );
};

export default Tooltip;
