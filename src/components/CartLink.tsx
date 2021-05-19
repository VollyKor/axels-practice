import { CartWrapper, CartText, CartNotification } from '../styled/CartLink';
import { IoCartOutline } from 'react-icons/io5';

interface Props {
    cartCount?: number;
}

const CartLink = ({ cartCount = 0 }: Props): JSX.Element => (
    <CartWrapper>
        <CartText className="mr-1">cart</CartText>
        <IoCartOutline size="25px" />
        <CartNotification className=" d-flex justify-content-center align-items-center">
            <span>{cartCount}</span>
        </CartNotification>
    </CartWrapper>
);

export default CartLink;
