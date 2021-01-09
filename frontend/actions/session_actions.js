import { signup, login, logout } from '../util/session_api_util';
export const RECEIEVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIEVE_SESSION_ERRORS = 'RECEIEVE_SESSION_ERRORS';

export const receiveCurrentUser = user => (
    {
        type: RECEIEVE_CURRENT_USER,
        user
    }
)

export const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
)

export const receiveErrors = (errors) => (
    {
        type: RECEIEVE_SESSION_ERRORS,
        errors
    }
)

export const signup = (user) => dispatch => signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
    )

export const login = (user) => dispatch => login(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
    )

export const logout = () => dispatch => logout(user)
    .then((user) => dispatch(logoutCurrentUser())
    )