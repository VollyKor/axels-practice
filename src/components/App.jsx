import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';

import { Cart, Navbar } from 'components';
import GlobalStyles from '../styled/globalStyles';
import PrintPage from './PrintPage';

function App() {
    return (
        <>
            <GlobalStyles />

            <Switch>
                <Route path="/print" exact>
                    <PrintPage />
                </Route>
                <Route path="/">
                    <Navbar />
                    <Route path="/" exact>
                        <Container className="p-3"></Container>
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Route>
            </Switch>
        </>
    );
}

export default App;
