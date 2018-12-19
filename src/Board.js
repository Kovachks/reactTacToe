import React, { Component } from 'react';
import Square from './Square.js'

class Board extends React.Component {

    //Funciton to render square with specific value
    renderSquare(i) {
        return <Square value={i}/>
    }

    //Renders Board component which utilizes 9 squares.  Will cut this down later.
    render() {
        return (
            <div>
                <div className="test">{}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }

}

export default Board;