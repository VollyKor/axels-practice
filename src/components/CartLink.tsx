import { CartWrapper, CartText, CartNotification } from '../styled/CartLink';
import { IoCartOutline } from 'react-icons/io5';

interface Props {
    productsInCart?: number;
}

const CartLink = ({ productsInCart = 0 }: Props): JSX.Element => (
    <CartWrapper>
        <CartText className="mr-1">cart</CartText>
        <IoCartOutline size="25px" />
        <CartNotification className=" d-flex justify-content-center align-items-center">
            <span>{productsInCart}</span>
        </CartNotification>
    </CartWrapper>
);

export default CartLink;
