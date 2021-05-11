import { CartWrapper, CartText, CartNotification } from '../styled/CartLink';
import { IoCartOutline } from 'react-icons/io5';

const Cart = () => (
    <CartWrapper>
        <CartText className="mr-1">cart</CartText>
        <IoCartOutline size="25px" />
        <CartNotification className=" d-flex justify-content-center align-items-center">
            <span>{3}</span>
        </CartNotification>
    </CartWrapper>
);

export default Cart;
