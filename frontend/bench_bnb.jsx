import React from 'react';
import ReactDOM from 'react-dom';

// Testing
import { signup, login, logout } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome</h1>, root);


    window.signup = signup
    window.login = login
    window.logout = logout
    window.user = { username: 'harry', password: 'password' }
})
