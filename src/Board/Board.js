import React from 'react';
import Square from '../Square/Square.js'
import './Board.css';

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            selected: 'unselected',
        }
    }

    setSelected = (i) => {
        console.log(this.state)
        
        const squares = this.state.squares.slice();

        squares[i] = 'X';

        this.setState({
            selected: 'selected',
            squares: squares
        })



    }

    //Funciton to render square with specific value
    renderSquare(i) {
        return <Square onClick={() => this.setSelected(i)} setSelected={this.setSelected} value={this.state.squares[i]}/>
    }

    //Renders Board component which utilizes 9 squares.  Will cut this down later.
    render() {
        return (
            <div className={`board ${this.state.selected} `}>
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