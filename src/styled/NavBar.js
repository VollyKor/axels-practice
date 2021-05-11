import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const C_Navbar = (props) => <Nav {...props}>{props.children}</Nav>;

const C_NavBarLink = ({ children, to }) => (
    <LinkContainer to={to} exact>
        <Nav.Link className="">{children}</Nav.Link>
    </LinkContainer>
);

export const Navbar = styled(C_Navbar)`
    background: var(--white-color);
    border-bottom: 1px solid var(--logo-color);
`;

export const NavLink = styled(C_NavBarLink)`
    color: var(--logo-color);
`;

export const NavLogo = styled.span`
    color: var(--pink-color);
`;

export const NavText = styled(NavLogo)`
    color: var(--primary-color);
`;
