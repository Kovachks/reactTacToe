import React from 'react';
import Game from './components/Game/Game.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import 'antd/dist/antd.css';
import './Reset.css';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router >
        <Routes />
      </Router >
    );
  };
};

export default App;