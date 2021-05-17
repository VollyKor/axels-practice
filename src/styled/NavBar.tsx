import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

const C_Navbar = (props: any) => <Nav {...props}>{props.children}</Nav>;

interface IC_NavBarLink {
    children: React.ReactNode;
    to: string;
}

const C_NavBarLink = ({ children, to }: IC_NavBarLink): JSX.Element => (
    <LinkContainer to={to} exact>
        <Nav.Link>{children}</Nav.Link>
    </LinkContainer>
);

export const Navbar = styled(C_Navbar)`
    background: var(--white-color);
    border-bottom: 1px solid var(--logo-color);
    text-align: center;

    justify-content: center;

    @media ${(props) => props.theme?.deviceSize?.small} {
        justify-content: space-around;
    }
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
