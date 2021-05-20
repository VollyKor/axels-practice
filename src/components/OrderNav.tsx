import { NavWrapper, Link, Icon } from 'styled/OrderNav';

const OrderNav = () => (
    <NavWrapper className="p-4">
        <Link
            to="/cart/shipping"
            className="navlink mr-2"
            activeClassName="active"
        >
            Shipping
        </Link>
        <Icon className="mr-2" size="30px" color="#808181" />
        <Link
            to="/cart/billing"
            className="navlink mr-2"
            activeClassName="active"
        >
            Billing
        </Link>
        <Icon className="mr-2" size="30px" color="#808181" />
        <Link
            to="/cart/payment"
            className="navlink mr-2"
            activeClassName="active"
        >
            Payment
        </Link>
    </NavWrapper>
);

export default OrderNav;
