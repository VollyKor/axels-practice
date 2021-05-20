import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';

import {
    ShippingForm,
    BillingForm,
    PaymentForm,
    OrderNav,
    OrderData,
} from 'components';

import { SET_GEO } from 'redux/ducks/geo';

const OrderForms = () => {
    const { pathname } = useLocation();

    const geo = useSelector((state: RootState) => state.geo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (geo.lat === null) {
            navigator.geolocation.getCurrentPosition(({ coords }) =>
                dispatch(
                    SET_GEO({
                        lat: coords.latitude,
                        lng: coords.longitude,
                    })
                )
            );
        }
    }, [dispatch, geo.lat]);

    return (
        <>
            {pathname !== '/cart/success' && <OrderNav />}

            <Route path="/cart/shipping" exact>
                <ShippingForm />
            </Route>
            <Route path="/cart/billing" exact>
                <BillingForm />
            </Route>
            <Route path="/cart/payment" exact>
                <PaymentForm />
            </Route>
            <Route path="/cart/success" exact>
                <OrderData />
            </Route>
        </>
    );
};

export default OrderForms;
