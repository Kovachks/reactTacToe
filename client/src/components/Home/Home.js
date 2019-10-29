import React from 'react';
import { Redirect } from 'react-router';
import Login from '../Login/Login';
import './Home.css';

class Home extends React.Component {

    state = {
        isAuth: false
    };

    render () {
        return (
            <div className='container'>
                <h4 className='header'>React-Tac-Toe</h4>
                {this.state.isAuth ?
                <Redirect to="/Game" /> :
                <Redirect to="/Login" />
                }
            </div>
        );    
    };
};

export default Home;