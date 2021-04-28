import { IoIosArrowForward } from "react-icons/io";

export default function OrderNav() {
  // maybe BreadCrumb
  return (
    <>
      <div className="p-3">
        <span>Shipping</span>
        <IoIosArrowForward />
        <span>Billing</span>
        <IoIosArrowForward />
        <span>Payment</span>
      </div>
    </>
  );
}
