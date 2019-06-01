import React, { Component } from 'react';
import Board from '../Board/Board.js'
import './Game.css';
import Player from '../Player/Player.js'

class Game extends React.Component {

    state = {
        currentPlayer: 'X',
        currentBoard: 4
    };

    userSelection = (val) => {
        if (this.state.currentPlayer === 'X') {
            this.setState({
                currentPlayer: 'O'
            })
        } else {
            this.setState({
                currentPlayer: 'X'
            });
        };

        console.log(val)

        this.setState({
            currentBoard: val
        });

    };

    renderBoard(i, s) {
        return <Board 
                    value={i} 
                    selected={s} 
                    userSelection={this.userSelection} 
                    currentPlayer={this.state.currentPlayer} 
                    currentBoard={this.state.currentBoard}
                />
    };

    render() {
        return (
            <div className='game'>
                <Player currentPlayer={this.state.currentPlayer}/>
                <div className='gameRow'>
                    {this.renderBoard(0, 'unselected')}
                    {this.renderBoard(1, 'unselected')}
                    {this.renderBoard(2, 'unselected')}
                </div>
                <div className='gameRow'>
                    {this.renderBoard(3, 'unselected')}
                    {this.renderBoard(4, 'selected')}
                    {this.renderBoard(5, 'unselected')}
                </div>
                <div className='gameRow'>
                    {this.renderBoard(6, 'unselected')}
                    {this.renderBoard(7, 'unselected')}
                    {this.renderBoard(8, 'unselected')}
                </div>
            </div>
             
        )
    }
}

export default Game;