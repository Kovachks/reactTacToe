import React from 'react';
import LoginForm from './LoginForm';
import Nav from '../Nav/Nav';

class Login extends React.Component {
    state = {
        isLoggedIn: false
    };

    handleLogin = () => {

    }

    render() {
        return(
            <>
                <Nav />
                {this.state.isLoggedIn ? 
                    <div>You are logged in!</div> :
                    <LoginForm onSubmit={this.handleLogin}/>
                }
            </>
        );
    };
};

export default Login;