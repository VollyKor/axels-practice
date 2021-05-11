import { useLocation } from 'react-router-dom';

import { IoIosArrowForward } from 'react-icons/io';

export default function OrderNav() {
    const { pathname } = useLocation();

    return (
        <div className="p-4 ">
            <span
                className={`navlink mr-2 ${
                    pathname === '/cart/shipping' && 'active'
                }`}
            >
                Shipping
            </span>
            <IoIosArrowForward className="mr-2" size="30px" color="#808181" />
            <span
                className={`navlink mr-2 ${
                    pathname === '/cart/billing' && 'active'
                }`}
            >
                Billing
            </span>
            <IoIosArrowForward className="mr-2" size="30px" color="#808181" />
            <span
                className={`navlink mr-2 ${
                    pathname === '/cart/payment' && 'active'
                }`}
            >
                Payment
            </span>
        </div>
    );
}
