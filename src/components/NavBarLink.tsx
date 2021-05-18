import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

interface Props {
    children: React.ReactNode;
    to: string;
}

const NavBarLink = ({ children, to }: Props) => (
    <LinkContainer to={to} exact>
        <Nav.Link>{children}</Nav.Link>
    </LinkContainer>
);

export default NavBarLink;
