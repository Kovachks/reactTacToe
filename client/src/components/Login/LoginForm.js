import React from 'react';
import './Login.css'

class LoginForm extends React.Component {

    state = {
        formValues: {
            email: null,
            password: null,
        }
    };

    render() {
        return (
            <div class="loginForm">
                <input placeholder="email" type="text">{this.state.formValues.email}</input>
                <input placeholder="password" type="password">{this.state.formValues.password}</input>
                <button onClick={() => this.props.onSubmit()}>Login</button>
            </div>
        );    
    }
};

export default LoginForm;