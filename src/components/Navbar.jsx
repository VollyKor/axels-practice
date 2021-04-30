import { Container, Row, Col } from "react-bootstrap";

import { NavLink, Navbar, NavLogo, NavText } from "../styled/NavBar";
import { CartLink } from "components";

export default function NavBar() {
  return (
    <Container className="mb-5">
      <Row>
        <Col className="mx-auto">
          <Navbar className="justify-content-around">
            <NavLink to="/">
              <NavLogo className="mr-1">{"</>"}</NavLogo>
              <NavText className="h5">Front-end Developer Test Task</NavText>
            </NavLink>
            <NavLink to="/cart">
              <CartLink />
            </NavLink>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
