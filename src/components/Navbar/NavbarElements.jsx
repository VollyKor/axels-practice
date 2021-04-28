import styled from "styled-components";
import { Link as link } from "react-router-dom";
import cart from "../Cart";

//  Icons...

export const Nav = styled.nav`
  padding: 10px;

  background: rgb(255, 255, 255);
  border-bottom: 1px solid #c26ea9;
`;

export const Link = styled(link)`
  text-decoration: none;
  color: #c26ea9;
`;

export const Cart = styled(cart)``;
export const Icon = styled.img``;
