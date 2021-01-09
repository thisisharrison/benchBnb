import { connect } from "react-redux";
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => (
    {
        currentUser: state.entities.users[state.session.id]
    }
)

const mapDispatchToProps = dispatch => (
    {
        logout: () => dispatch(logout())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

/*
// Get the id from session 
// Get the entity from user 
{
    entities: {
        users: { }
    },
    errors: {
        session: []
    },
    session: {
        id: null
    }
}
*/