import { Container, Row, Col } from 'react-bootstrap';

import { NavLink, Navbar, NavLogo, NavText } from '../styled/NavBar';
import { CartLink } from 'components';

const NavBar = () => (
    <Container className="mb-5">
        <Row>
            <Col className="mx-auto">
                <Navbar>
                    <NavLink to="/">
                        <NavLogo className="mr-1">{'</>'}</NavLogo>
                        <NavText className="h5">
                            Front-end Developer Test Task
                        </NavText>
                    </NavLink>

                    <NavLink to="/cart/shipping">
                        <CartLink />
                    </NavLink>
                </Navbar>
            </Col>
        </Row>
    </Container>
);

export default NavBar;
