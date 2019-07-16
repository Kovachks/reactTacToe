import React from 'react';
import Board from '../Board/Board';
import Concede from '../Concede/Concede';
import Player from '../Player/Player.js'
import ScoreCard from '../ScoreCard/ScoreCard';
import { Modal } from 'antd';
import './Game.css';

class Game extends React.Component {

    state = {
        boardSelected: [0, 0, 0, 0, 1, 0, 0, 0, 0],
        boardStatus: Array(9).fill(null),
        currentPlayer: 'X',
        currentBoard: 4,
        winSequences: ['012', '036', '048', '147', '246', '258', '345', '678'],
        xWins: 0,
        oWins: 0,
        visible: false
    };

    resetGame = () => {
        this.setState({
            boardSelected: [0, 0, 0, 0, 1, 0, 0, 0, 0],
            boardStatus: Array(9).fill(null),
            currentPlayer: 'X',
            currentBoard: 4,
            winSequences: ['012', '036', '048', '147', '246', '258', '345', '678'],
            xWins: 0,
            oWins: 0,
            visible: false
        }, () => {
            console.log(this.state)
        });
    };

    winCheck = (val, squares, currentBoard, currentPlayer, nextPlayer) => {
        console.log(val);
        console.log(squares);
        let winPlayer
        if (currentPlayer === 'X') {
            winPlayer = 'xWins';
        } else {
            winPlayer = 'oWins';
        };
        for (let i = 0; i < this.state.winSequences.length; i++) {
            let compareArr = this.state.winSequences[i].split('');
            let winCount = 0;
            for (let j = 0; j < compareArr.length; j++) {
                if (squares[compareArr[j]] !== this.state.currentPlayer) {
                    break;
                } else {
                    winCount ++;
                };
            };
            if (winCount === 3) {
                let boardStatus = this.state.boardStatus.slice();
                boardStatus[currentBoard] = currentPlayer;
                this.setState((prevState => (
                    {
                        boardStatus,
                        [winPlayer]: prevState[winPlayer] + 1
                    }
                )), () => {
                    if (this.state.xWins === 5) {
                        console.log(`player ${currentPlayer} wins the game!`)
                    } else if (val === currentBoard) {
                        let boardSelected = [];
                        for (let i = 0; i < boardStatus.length; i++) {
                            if (!boardStatus[i]) {
                                boardSelected.push(1);
                            } else {
                                boardSelected.push(0);
                            };
                        };
                        this.setState({
                            boardSelected
                        }, () => {
                            console.log(this.state)
                        });     
                        return
                    };
                });
            } else {
                // console.log('test')
                // let boardSelected = Array(9).fill(0);
                // boardSelected[val] = 1
                // this.setState({
                //     boardSelected
                // });
            };
        };

        if (this.state.boardStatus[val] === null) {
            // Setting the board selected array to the new instance after a user selection
            let boardSelected = Array(9).fill(0);
            boardSelected[val] = 1

            console.log(boardSelected);

            this.setState({
                    boardSelected,
                    currentPlayer: nextPlayer
                }, () => {
                    console.log(this.state)
                }
            );
        } else {
            let boardSelected = [];
            for (let i = 0; i < this.state.boardStatus.length; i++) {
                if (!this.state.boardStatus[i]) {
                    boardSelected.push(1);
                } else {
                    boardSelected.push(0);
                };
            };
            this.setState({
                boardSelected,
                currentPlayer: nextPlayer
            }, () => {
                console.log(this.state)
            });     
            return
        };
    };
    
    userSelection = (val, squares, currentBoard) => {
        if (this.state.currentPlayer === 'X') {
            this.winCheck(val, squares, currentBoard, 'X', 'O')
        } else {
            this.winCheck(val, squares, currentBoard, 'O', 'X')
        };
    };

    handleConcede = currentPlayer => {
        console.log(currentPlayer);
        this.setState({
            winningPlayer: currentPlayer,
            visible: true
        }, () => {
            console.log(this.state)
        })
    };

    handleOk = e => {
        console.log(e);
        this.resetGame();
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    renderBoard(i, s) {
        return <Board 
                    value={i} 
                    selected={this.state.boardSelected[i]}
                    userSelection={this.userSelection} 
                    currentPlayer={this.state.currentPlayer} 
                    boardStatus={this.state.boardStatus[i]}
                    boardSelected={this.state.boardSelected[i]}
                />
    };

    render() {
        return (
            <div className='game'>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}

                >
                    Player {this.state.winningPlayer} has won!
                </Modal>
                <Player currentPlayer={this.state.currentPlayer}/>
                <ScoreCard 
                    wins={this.state.xWins}
                    player='X'
                />
                <ScoreCard 
                    wins={this.state.oWins}
                    player='O'
                />
                <Concede 
                    player={this.state.currentPlayer}
                    onClick={this.handleConcede}
                />
                <div className='gameRow'>
                    {this.renderBoard(0)}
                    {this.renderBoard(1)}
                    {this.renderBoard(2)}
                </div>
                <div className='gameRow'>
                    {this.renderBoard(3)}
                    {this.renderBoard(4)}
                    {this.renderBoard(5)}
                </div>
                <div className='gameRow'>
                    {this.renderBoard(6)}
                    {this.renderBoard(7)}
                    {this.renderBoard(8)}
                </div>
            </div>
             
        )
    }
}

export default Game;