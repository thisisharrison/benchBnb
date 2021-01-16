import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import BenchFormContainer from './bench_form/bench_form_container';
import BenchShowContainer from './benches/bench_show_container';
// import BenchIndexContainer from './benches/bench_index_container';
import SearchContainer from '../components/search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Bench Bnb</h1>
            <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route exact path='/' component={SearchContainer}/>
        <ProtectedRoute exact path='/benches/new' component={BenchFormContainer} />
        <Route exact path='/benches/:benchId' component={BenchShowContainer} />
    </div>
)

export default App;