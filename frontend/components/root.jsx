import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

// App will be rendered for all routes in the app
// Define routes within App
const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

export default Root;