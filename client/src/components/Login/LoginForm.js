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
                <input name="email" value={this.props.formValues.email} type="text" onChange={e => this.props.onChange(e)} />
                <input name='password' value={this.props.formValues.password} type="password" onChange={e => this.props.onChange(e)}/>
                <button onClick={() => this.props.onSubmit()}>Login</button>
            </div>
        );    
    }
};

export default LoginForm;