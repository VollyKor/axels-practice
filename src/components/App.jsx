import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";

import { Cart, Navbar } from "components";

import GlobalStyles from "../styled/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Container className="p-3"></Container>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
