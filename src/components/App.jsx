import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Cart, Navbar } from "components";

import GlobalStyles from "../styled/globalStyles";

function App() {
  const dispatch = useDispatch();
  const action = {
    type: "GET_PRODUCTS",
    payload: "",
  };

  return (
    <>
      <GlobalStyles />
      <button onClick={() => dispatch(action)}>Click Me!</button>
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
