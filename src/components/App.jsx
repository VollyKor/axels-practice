import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import OrderSummary from "../components/OrderSummary";
import StyledNavBar from "../components/Navbar/StyledNavBar";

import logo from "../logo.svg";
import ShippingForm from "./ShippingForm";
import OrderNav from "./OrderNav";

function App() {
  return (
    <>
      <StyledNavBar />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Container className="p-3">
            <main className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code> src / App.js </code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </main>
          </Container>
        </Route>
        <Route path="/cart">
          <Container>
            <Row>
              <Col>
                <OrderNav />
                <ShippingForm />
              </Col>
              <Col>
                <OrderSummary />
              </Col>
            </Row>
          </Container>
        </Route>
      </Switch>
    </>
  );
}

export default App;
