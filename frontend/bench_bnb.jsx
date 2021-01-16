import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// Testing
import { signup, login, logout } from './actions/session_actions'
import { fetchBenches } from './actions/bench_actions';
import { receiveReview } from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.signup = signup
    window.login = login
    window.logout = logout
    window.user = { username: 'harry', password: 'password' }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBenches = fetchBenches;
    window.receiveReview = receiveReview;

    ReactDOM.render(<Root store={store}/>, root);
})
