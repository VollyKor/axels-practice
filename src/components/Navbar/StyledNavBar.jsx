import { Container } from "react-bootstrap";
import { Nav, Link, Icon, Cart } from "./NavbarElements";
import { IoCartOutline } from "react-icons/io5";

export default function StyledNavBar() {
  return (
    <header>
      <Container>
        <Nav>
          <Link to="/">
            <Icon />
            <span>{"</>"}</span>
            <span>Front-end Developer Test Task</span>
          </Link>
          <Link to="/cart">
            <span>Cart</span>
            <IoCartOutline size="25px" />
          </Link>
        </Nav>
      </Container>
    </header>
  );
}
