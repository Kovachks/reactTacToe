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
                <input value={this.state.formValues.email} placeholder="email" type="text"></input>
                <input value={this.state.formValues.password} placeholder="password" type="password"></input>
                <button onClick={() => this.props.onSubmit()}>Login</button>
            </div>
        );    
    }
};

export default LoginForm;