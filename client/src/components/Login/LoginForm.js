import React from 'react';
import './Login.css'

const LoginForm = props => {
    return (
        <div className="loginForm">
            {props.formValues && 
            props.formValues.map(ele => {
                return <input 
                    name={ele.name}
                    value={ele.value}
                    type={ele.type}
                    placeholder={ele.placeholder}
                    onChange={e => props.onChange(e)}
                />
            })}
            <button onClick={() => props.onSubmit()}>Login</button>
        </div>
    );    
};

export default LoginForm;