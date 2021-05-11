import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

import { Wrapper } from './utils/common';

import Img from '../images/image-not-found.jpg';

export const ProductName = styled.h2`
    margin-bottom: 2px;
    color: var(--text-accent-color);
    font-size: 0.8rem;
`;

export const ProductDescr = styled.p`
    margin-bottom: 0;
    color: var(--black-color);

    font-size: 0.65rem;
`;

export const ProductQn = styled(ProductDescr)``;

export const ProductPrice = styled.p`
    margin-left: auto;
    font-size: 0.8rem;
    color: var(--accent-text-color);
`;

export const ProductsContainer = styled.div``;

export const ProductInfo = ({
    name = 'unknown',
    color = 'default',
    quantity = 1,
}) => (
    <ProductsContainer className="p-1">
        <ProductName className="h6">{name}</ProductName>
        <ProductDescr>{color}</ProductDescr>
        <ProductQn>Quantity {quantity}</ProductQn>
    </ProductsContainer>
);

export const ProductImg = ({ img }) => (
    <Wrapper className="wrapper">
        <Image
            src={Img}
            alt=""
            width="50px"
            height="50px"
            className="p-1"
            rounded
        />
    </Wrapper>
);
