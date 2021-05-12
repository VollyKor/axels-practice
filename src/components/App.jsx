import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Cart, Navbar } from 'components';
import PrintPage from './PrintPage';

import GlobalStyles from '../styled/utils/globalStyles';
import theme from '../styled/utils/themeStyles';

const App = () => (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
);

export default App;
