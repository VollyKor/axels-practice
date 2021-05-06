import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOrderDataFromLS } from 'helpers/localStorage';
import { POST_ORDER } from '../redux/saga';

export default function OrderData() {
    const { orderId, contactEmail, deliveryDate } = useSelector(
        (state) => state.order
    );
    const dispatch = useDispatch();

    useEffect(() => {
        const orderData = getOrderDataFromLS();
        dispatch(POST_ORDER(orderData));
    }, [dispatch]);

    return (
        <div className="p-4 mt-5">
            <h4 className="mb-4">Thank you for your order!</h4>
            <p className="font-weight-bold text-dark mb-2">
                Order number is: {orderId}
            </p>
            <p className="h6 mb-3">
                <span className="text-dark">{`You will recieve an email confirmation shortly to `}</span>
                <u>
                    <a type="email" href={`mailto:${contactEmail}`}>
                        {contactEmail}
                    </a>
                </u>
            </p>
            <p className="text-dark mb-0">{`Estimated delivery Day is `}</p>
            <p className="font-weight-bold text-dark">{deliveryDate}</p>

            <small>
                <u>
                    <a href="/" className="font-weight-bold ">
                        Print recipe
                    </a>
                </u>
            </small>
        </div>
    );
}
