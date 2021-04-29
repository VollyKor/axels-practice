import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function C_Navbar(props) {
  return <Nav {...props}>{props.children}</Nav>;
}

function C_NavBarLink({ children, to }) {
  return (
    <LinkContainer to={to} exact>
      <Nav.Link className="">{children}</Nav.Link>
    </LinkContainer>
  );
}

export const Navbar = styled(C_Navbar)`
  background: rgb(255, 255, 255);
  border-bottom: 1px solid #c26ea9;
`;

export const NavLink = styled(C_NavBarLink)`
  color: #c26ea9;
`;

export const NavLogo = styled.span`
  color: #fe71ac;
`;

export const NavText = styled(NavLogo)`
  color: #9362b9;
`;
