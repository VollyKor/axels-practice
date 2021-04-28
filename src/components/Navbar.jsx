import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "./Cart";

export default function NavBar() {
  return (
    <Container className="mb-5">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-between">
            <Navbar.Brand href="/">
              {"</>"}Front-end Developer Test Task
            </Navbar.Brand>
            <Nav.Item href="#home" className="m-auto">
              <Cart />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
</Navbar>;
