import React from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';

class Login extends React.Component {
    state = {
        errFlag: true,
        errMessages: [],
        isLoggedIn: false,
        formValues: [
            {
                placeholder: 'Username',
                value: '',
                name: 'userName',
                type: 'text'
            },
            {
                placeholder: 'Email',
                value: '',
                name: 'email',
                type: 'text'
            },
            {
                placeholder: 'Password',
                value: '',
                name: 'password',
                type: 'password'
            },
            {
                placeholder: 'Confirm Password',
                value: '',
                name: 'passwordConfirmation',
                type: 'passwowrd'
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
            email: this.state.formValues[1].value,
            password: this.state.formValues[2].value,
            passwordConfirmation: this.state.formValues[3].value
        };

        if (Object.values(user).indexOf("") >= -1) {
            this.setState(() => {
                return {
                    errFlag: true,
                    errMessages: ['Please fill in all fields']
                };
            });
            return
        };

        console.log(user);

        if (user.password !== user.passwordConfirmation || user.password === "") {
            this.setState(() => {
                return {
                    errFlag: true,
                    errMessages: ['Passwords did not match']
                }
            }, () => {
                console.log(this.state)
            });
        } else {
            delete user.passwordConfirmation;
            axios.post('/user/signup', user).then(res => {
                console.log(res);
            }).catch(err => {
                this.setState({
                    errFlag: true,
                    errMessages: err.map(err => err)
                }, () => {
                    console.log(this.state);
                });
            });
        };
    };

    render() {
        return(
            <div className="loginDiv">
                {/* <Nav /> */}
                <h3>React-Tac-Toe</h3>
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