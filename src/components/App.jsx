import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';

import { Cart, Navbar } from 'components';
import PrintPage from './PrintPage';

import GlobalStyles from '../styled/globalStyles';

const App = () => (
    <>
        <GlobalStyles />

        <Switch>
            <Route path="/print" exact>
                <PrintPage />
            </Route>
            <Route path="/">
                <Navbar />
                <Route path="/" exact>
                    <Container className="p-3" />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Route>
        </Switch>
    </>
);

export default App;
