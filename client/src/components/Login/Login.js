import React from 'react';
import LoginForm from './LoginForm';
import { Button } from 'antd';
import axios from 'axios';

class Login extends React.Component {
    state = {
        errFlag: true,
        errMessages: [],
        isLoggedIn: false,
        formValues: [
            {
                placeholder: 'Username/Email',
                value: '',
                name: 'userName',
                type: 'text'
            },
            {
                placeholder: 'Password',
                value: '',
                name: 'password',
                type: 'password'
            }
        ]
    };

    componentDidMount = e => {

    };

    onTextChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(() => {
            return {
                formValues: this.state.formValues.map(ele => {
                    if (ele.name === name) {
                        ele.value = value;
                    }
                    return ele;
                })
            };
        });
    };

    handleLogin = () => {
        const user = {
            name: this.state.formValues[0].value,
            password: this.state.formValues[1].value,
        };

        if (Object.values(user).indexOf("") > -1) {
            this.setState(() => {
                return {
                    errFlag: true,
                    errMessages: ['Please fill in all fields']
                };
            });
            return
        };
        
        axios.post('/user/login', user).then(res => {
            console.log(res);
        }).catch(err => {
            this.setState({
                errFlag: true,
                errMessages: err.response.data.map(err => err)
            });
        });
    };

    render() {
        return(
            <div className="loginDiv">
                {/* <Nav /> */}
                <h4 
                    className='header'
                    style={{
                        textAlign: 'center',
                        fontSize: 25,
                        marginBottom: 15
                    }}
                >
                Login
                </h4>
                {this.state.formValues &&
                <LoginForm
                    formValues={this.state.formValues}
                    onSubmit={this.handleLogin}
                    onChange={this.onTextChange}
                />
                }
                {this.state.errFlag &&
                this.state.errMessages.map((ele, index) => {
                    return <p key={index} style={{color: 'red'}}>{ele}</p>
                })
                }
            </div>
        );
    };
};

export default Login;