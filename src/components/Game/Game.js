import React from 'react';
import Board from '../Board/Board.js'
import './Game.css';
import Player from '../Player/Player.js'

class Game extends React.Component {

    state = {
        boardStatus: Array(9).fill(null),
        currentPlayer: 'X',
        currentBoard: 4,
        winSequences: ['012', '036', '048', '147', '246', '258', '345', '678']
    };

    userSelection = (val, squares) => {
        console.log(val, squares);
        if (this.state.currentPlayer === 'X') {
            for (let i = 0; i < this.state.winSequences.length; i++) {
                let compareArr = this.state.winSequences[i].split('');
                let winCount = 0;
                for (let j = 0; j < compareArr.length; j++) {
                    console.log(squares[compareArr[j]])
                    console.log(this.state.currentPlayer)
                    if (squares[compareArr[j]] !== this.state.currentPlayer) {
                        break
                    } else {
                        winCount ++
                        console.log(winCount)
                    };
                };
                if (winCount === 3) {
                    let boardStatus = this.state.boardStatus.slice();
                    boardStatus[val] = 'X'
                    this.setState({
                        boardStatus
                    }, () => {
                        console.log(this.state)
                    })
                    console.log('you won the square!')
                };
            };
            
            this.setState({
                currentPlayer: 'O'
            });
        } else {
            this.setState({
                currentPlayer: 'X'
            });
        };

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
                    boardStatus={this.state.boardStatus[i]}
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