import React, { Component } from 'react';
import Board from '../Board/Board.js'
import './Game.css';
import Player from '../Player/Player.js'

class Game extends React.Component {

    renderBoard(i, s) {
        return <Board value={i} selected={s} />
    }

    render() {
        return (
            <div className='game'>
                <Player />
                <div className='gameRow'>
                    {this.renderBoard(1, 'unselected')}
                    {this.renderBoard(2, 'unselected')}
                    {this.renderBoard(3, 'unselected')}
                </div>
                <div className='gameRow'>
                    {this.renderBoard(4, 'unselected')}
                    {this.renderBoard(5, 'selected')}
                    {this.renderBoard(6, 'unselected')}
                </div>
                <div className='gameRow'>
                    {this.renderBoard(7, 'unselected')}
                    {this.renderBoard(8, 'unselected')}
                    {this.renderBoard(9, 'unselected')}
                </div>
            </div>
             
        )
    }
}

export default Game;