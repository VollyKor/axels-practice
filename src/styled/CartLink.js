import styled from 'styled-components';
import { IoCartOutline } from 'react-icons/io5';

import { Wrapper } from './utils';

export const CartName = styled.span``;
export const CartQuantyty = styled.p``;

export const Cart = () => (
    <Wrapper>
        <CartName className="mr-1">cart</CartName>
        <IoCartOutline size="25px" />
        <CartQuantyty>1</CartQuantyty>
    </Wrapper>
);

export const CartWrapper = styled.div`
    position: relative;
    color: var(--cart-link);
`;
export const CartText = styled.span``;

export const CartNotification = styled.div`
    position: absolute;
    top: 0;
    right: -2px;

    width: 12px;
    height: 12px;

    color: var(--white-color);
    background-color: var(--pink-color);
    border-radius: 50%50%;

    font-size: 9px;
`;
