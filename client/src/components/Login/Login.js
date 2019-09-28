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
            <div style={{'width': '15vw', 'margin': '30vh auto'}}>
                {/* <Nav /> */}
                <h3>React-Tac-Toe</h3>
                {this.state.isLoggedIn ? 
                    <div>You are logged in!</div> :
                    <LoginForm onSubmit={this.handleLogin}/>
                }
            </div>
        );
    };
};

export default Login;