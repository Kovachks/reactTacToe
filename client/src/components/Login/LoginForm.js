import React from 'react';
import './Login.css'

class LoginForm extends React.Component {

    state = {
        formValues: {
            email: '',
            password: '',
        }
    };

    render() {
        return (
            <div className="loginForm">
                <input
                    name="userName"
                    value={this.props.formValues.userName}
                    type="text"
                    placeholder="User Name"
                    onChange={e => this.props.onChange(e)}
                />
                <input
                    name="email"
                    value={this.props.formValues.email}
                    type="text"
                    placeholder="Email"
                    onChange={e => this.props.onChange(e)}
                />
                <input
                    name='password'
                    value={this.props.formValues.password}
                    type="password"
                    placeholder="Password"
                    onChange={e => this.props.onChange(e)}
                />
                <button onClick={() => this.props.onSubmit()}>Login</button>
            </div>
        );    
    }
};

export default LoginForm;