import React from 'react';
import { Button, Input } from 'antd';
import './Signup.css'

const SignupForm = props => {
    return (
        <div className="loginForm">
            {props.formValues &&
            props.formValues.map(ele => {
                return <Input 
                    name={ele.name}
                    value={ele.value}
                    type={ele.type}
                    placeholder={ele.placeholder}
                    onChange={e => props.onChange(e)}
                    style={{
                        padding: '0 10px',
                        height: '30px'
                    }}
                />
            })}
            <Button onClick={() => props.onSubmit()}>Signup</Button>
        </div>
    );    
};

export default SignupForm;