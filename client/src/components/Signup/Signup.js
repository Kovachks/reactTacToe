import React from 'react';
import { Redirect } from 'react-router-dom';
import SignupForm from './SignupForm';
import { Button } from 'antd';
import axios from 'axios';

class Signup extends React.Component {
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
                type: 'password'
            }
        ],
        redirect: false
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

    returnHome = e => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/',
                state: {
                    userData: this.state.userData,
                    isLoggedIn: true    
                }
            }}/>
        }
    };

    handleLogin = () => {
        const errMessages = [];
        let errFlag = false;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        this.setState({
            errFlag: false,
            errMessages: []
        });

        const user = {
            userName: this.state.formValues[0].value,
            email: this.state.formValues[1].value,
            password: this.state.formValues[2].value,
            passwordConfirmation: this.state.formValues[3].value
        };

        if (Object.values(user).indexOf("") > -1) {
            errMessages.push('Please fill in all fields');
            errFlag = true;
        };

        if (user.password !== user.passwordConfirmation) {
            errMessages.push('Passwords do not match');
            errFlag = true;
        };

        if (!emailRegex.test(user.email)) {
            errMessages.push('Please enter a valid email')
            errFlag = true;
        }

        if (errFlag) {
            this.setState({
                errFlag: true,
                errMessages
            });
            return;
        };

        // Validation successful sign user up
        delete user.passwordConfirmation;
        axios.post('/user/signup', user).then(res => {
            let userData = res.data;
            this.setState({
                redirect: true,
                userData  
            })
        }).catch(err => {
            console.log(err.response.data)
            this.setState({
                errFlag: true,
                errMessages: err.response.data.errArr.map(err => err)
            }, () => {
                console.log(this.state);
            });
        });
    };

    render() {
        return(
            <div className="loginDiv">
                {/* <Nav /> */}
                {this.returnHome()}
                <h4 
                    className='header'
                    style={{
                        textAlign: 'center',
                        fontSize: 25,
                        marginBottom: 15
                    }}
                >
                Signup
                </h4>
                {this.state.formValues &&
                <SignupForm
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

export default Signup;