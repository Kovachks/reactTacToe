import React from 'react';
import { Redirect } from 'react-router';
import Login from '../Login/Login';
import User from '../User/User';
import { Button } from 'antd';
import './Home.css';
import { Z_BLOCK } from 'zlib';

class Home extends React.Component {

    state = {
        isAuth: true,
        redirect: false,
    };

    componentDidMount = () => {
        if (this.props.location) {
            if (this.props.location.state) {
                if (this.props.location.state.isLoggedIn) {
                    this.setState({
                        isAuth: true,
                    });
                };    
            };    
        }
    };

    componentDidUpdate = () => {
        console.log(this.props.location.state)
    }

    setRedirect = route => {
        this.setState({
          redirect: true,
          route
        });
      };

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={this.state.route} />
        }
      }

    render () {
        return (
            <>
                {this.state.isAuth && <User />}
                <div 
                    // className='container'
                    // style={{
                    //     width: '250px',
                    //     margin: '25% auto 0 auto'
                    // }}
                    className="loginDiv"
                >
                {this.renderRedirect()}
                    <h4 
                        className='header'
                        style={{
                            textAlign: 'center',
                            fontSize: 25
                        }}
                    >
                        React-Tac-Toe
                    </h4>
                    <div
                        className="buttonRow"
                        style={{

                        }}
                    >
                        <Button onClick={e => {this.setRedirect('/Game')}} className="buttons">Play</Button>
                        <Button onClick={e => {this.setRedirect('/Signup')}} className="buttons">Sign Up</Button>
                        <Button onClick={e => {this.setRedirect('/Login')}} className="buttons">Sign In</Button>
                    </div>
                </div>
            </>
        );    
    };
};

export default Home;