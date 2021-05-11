import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const OrderNav = () => (
    <div className="p-4 ">
        <NavLink
            to="/cart/shipping"
            className="navlink mr-2"
            activeClassName="active"
        >
            Shipping
        </NavLink>
        <IoIosArrowForward className="mr-2" size="30px" color="#808181" />
        <NavLink
            to="/cart/billing"
            className="navlink mr-2"
            activeClassName="active"
        >
            Billing
        </NavLink>
        <IoIosArrowForward className="mr-2" size="30px" color="#808181" />
        <NavLink
            to="/cart/payment"
            className="navlink mr-2"
            activeClassName="active"
        >
            Payment
        </NavLink>
    </div>
);

export default OrderNav;
