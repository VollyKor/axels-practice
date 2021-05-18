import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export const Navbar = styled(Nav)`
    background: var(--white-color);
    border-bottom: 1px solid var(--logo-color);
    text-align: center;

    justify-content: center;

    @media ${(props) => props.theme?.deviceSize?.small} {
        justify-content: space-around;
    }
`;

export const NavLogo = styled.span`
    color: var(--pink-color);
`;

export const NavText = styled(NavLogo)`
    color: var(--primary-color);
`;
