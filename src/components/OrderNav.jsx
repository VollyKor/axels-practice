import { IoIosArrowForward } from 'react-icons/io';

export default function OrderNav() {
    // maybe BreadCrumb
    return (
        <>
            <div className="p-4 ">
                <span className="mr-2">Shipping</span>
                <IoIosArrowForward className="mr-2" size="30px" />
                <span>Billing</span>
                <IoIosArrowForward className="mr-2" size="30px" />
                <span>Payment</span>
            </div>
        </>
    );
}
