import Container from "react-bootstrap/Container";
import MainPage from "./MainPage/MainPage";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Cart from "./Cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Container className="p-3">
            <MainPage />
          </Container>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
