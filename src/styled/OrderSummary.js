import styled from "styled-components";
import Image from "react-bootstrap/Image";

import Img from "../images/image-not-found.jpg";

const Wrapper = styled.div``;

const ProductName = styled.h2`
  margin-bottom: 2px;
  color: var(--text-accent-color);
  font-size: 0.8rem;
`;
const ProductDescr = styled.p`
  margin-bottom: 0;
  color: var(--black-color);

  font-size: 0.65rem;
`;
const ProductQn = styled(ProductDescr)``;

export const ProductPrice = styled.p`
  margin-left: auto;
  font-size: 0.8rem;
  color: #757575;
`;

export const ProductInfo = () => (
  <Wrapper className="p-1">
    <ProductName className="h6">{"Boots"}</ProductName>
    <ProductDescr>{"black"}</ProductDescr>
    <ProductQn>Quantity {1}</ProductQn>
  </Wrapper>
);

export const ProductImg = () => (
  <div className="wrapper">
    <Image
      src={Img}
      alt=""
      width="50px"
      height="50px"
      className="p-1"
      rounded
    />
  </div>
);
