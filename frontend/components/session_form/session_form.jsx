import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    handleInput(property) {
        return (e) => {
            this.setState({[property]: e.target.value});
        }
    }
    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((e, i) => <li key={`error-${i}`}>{e}</li>)}
            </ul>
        )
    }
    render () {
        const {errors, formType} = this.props;
        const heading = (formType === 'signup') ? 'Sign Up' : 'Log In';
        const alternate = (formType === 'signup') ? 'Log In' : 'Sign Up';
        const alternateAddress = (formType === 'signup') ? '/login' : '/signup';
        const errorslist = this.renderErrors();
        return (
            <div>
                <h2>{heading}</h2>
                <Link to={alternateAddress}>{alternate}</Link>
                {errorslist}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: 
                        <input type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>
                        Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <input type="submit" value={heading}/>
                </form>
            </div>
        )
    }
}

export default SessionForm;