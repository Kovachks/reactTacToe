import React from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';

class Login extends React.Component {
    state = {
        isLoggedIn: false,
        formValues: {
            email: '',
            password: ''
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
            console.log(err);
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
            </div>
        );
    };
};

export default Login;