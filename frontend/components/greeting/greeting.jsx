import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
        </div>
    )
    const personalLinks = () => (
        <div>
            <h1>Welcome {currentUser.username}!</h1>
            <button onClick={logout}>Log Out</button>
        </div>
    ) 
    return currentUser ? personalLinks() : sessionLinks();
}
export default Greeting;