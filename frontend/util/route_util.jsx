import { withRouter, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react';

const Auth = ({path, loggedIn, exact, component: Component}) => (
    <Route
        path={path}
        exact={exact}
        render={(props => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);
const mapStateToProps = ({session}) => {
    return { loggedIn: Boolean(session.id) }
}
export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
);

const Protected = ({ path, loggedIn, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={(props =>
            !loggedIn ?  <Redirect to="/" /> : <Component {...props} />
        )}
    />
)
export const ProtectedRoute = withRouter(
    connect(mapStateToProps, null)(Protected)
);
