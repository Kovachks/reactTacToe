import React from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';

class Login extends React.Component {
    state = {
        errFlag: true,
        errMessages: [],
        isLoggedIn: false,
        formValues: {
            email: '',
            password: '',
            userName: ''
        }
    };

    componentDidMount = e => {

    };

    onTextChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            formValues: {
                ...this.state.formValues,
                [name]: value
            }
        });
    };

    handleLogin = () => {
        const user = this.state.formValues

        console.log(user);
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

    render() {
        return(
            <div style={{'width': '15vw', 'margin': '30vh auto'}}>
                {/* <Nav /> */}
                <h3>React-Tac-Toe</h3>
                {this.state.isLoggedIn ? 
                    <div>You are logged in!</div> :
                    <LoginForm
                        formValues={this.state.formValues}
                        onSubmit={this.handleLogin}
                        onChange={this.onTextChange}
                    />
                }
                {this.state.errFlag &&
                this.state.errMessages.map(ele => {
                    return <p style={{colo: 'red'}}>{ele}</p>
                })
                }
            </div>
        );
    };
};

export default Login;