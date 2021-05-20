import Container from 'react-bootstrap/Container';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { Cart, Navbar, PrintPage } from 'components';

import GlobalStyles from 'styled/utils/globalStyles';
import theme from 'styled/utils/themeStyles';

const App = (): JSX.Element => (
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
