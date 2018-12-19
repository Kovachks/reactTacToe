import React, { Component } from 'react';
import Board from './Board.js'

class Game extends React.Component {
    render() {
        return (
            <Board />
            <Board />
        )
    }
}

export default Game;