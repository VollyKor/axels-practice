import { Container, Row, Col } from 'react-bootstrap';

import { CartLink } from 'components';
import { NavLink } from 'styled/NavBarLink';
import { Navbar, NavLogo, NavText } from 'styled/NavBar';

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
