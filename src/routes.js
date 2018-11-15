import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history'

// Material UI Theme Customization
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// configureStore
import configureStore from 'store/configureStore';

/* mobile view */
import Home from 'containers/Home'
import CV from 'containers/CV'
import NotFound from 'containers/NotFound'

import ScrollToTop from './ScrollToTop'

// Main Theme applied to complete application
const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#60d4ea",
            main: "#17a2b8",
            dark: "#007388",
            contrastText: "#fff"
        },
        secondary: {
            light: "#6dfcff",
            main: "#1cc9ef",
            dark: "#0098b3",
            contrastText: "#fff"
        }
    }
})

const history = createBrowserHistory();
let store = configureStore(history)

// Routes
// contain all routes into a variable to be imported into index.js
const routes = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollToTop>
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <Route exact path='/' component={Home} />
                        <Route path='/cv' component={CV} />
                        
                        {/*If no route matches. display 404 error*/}
                        <Route component={NotFound} />
                    </Router>
                </MuiThemeProvider>
            </ScrollToTop>
        </ConnectedRouter>
    </Provider>
);

export default routes;