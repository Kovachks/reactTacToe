import React from 'react';
import Square from '../Square/Square.js'
import './Board.css';

class Board extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            squares: Array(9).fill(null),
            selected: props.selected,
            value: props.value
        }
    };

    setSelected = (i) => {

        const squares = this.state.squares.slice();

        // Check if square has been selected before
        if (!squares[i]) {
            squares[i] = this.props.currentPlayer;
            this.setState({
                selected: 'selected',
                squares: squares
            }, () => {
                this.props.userSelection(i);
            });
        };
        console.log(i);
    };

    //Funciton to render square with specific value
    renderSquare(i) {
        return <Square
                    onClick={() => this.setSelected(i)} 
                    setSelected={this.setSelected} 
                    value={this.state.squares[i]} 
                    disabled={this.props.currentBoard === this.state.value ? false : true}
                />
    }

    //Renders Board component which utilizes 9 squares.  Will cut this down later.
    render() {
        return (
            <div 
                className={`board ${this.props.currentBoard === this.state.value ? 'selected' : 'unselected'}`}
                value={this.state.value}
            >
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