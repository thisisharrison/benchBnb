import { withRouter, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = ({ session }) => {
    return { loggedIn: Boolean(session.id) }
}

const Auth = ({path, loggedIn, exact, component: Component}) => (
    <Route
        path={path}
        exact={exact}
        render={(props => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
);

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
);

const Protected = ({ path, loggedIn, exact, component: Component }) => (
    <Route
        path={path}
        exact={exact}
        render={(props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
)
export const ProtectedRoute = withRouter(
    connect(mapStateToProps, null)(Protected)
);
