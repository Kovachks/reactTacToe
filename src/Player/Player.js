import React from 'react';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: 'X'
        }
    }

    render() {
        return(
            <div>
                <h4>Next Player: {this.state.player}</h4>
            </div>
        )
    }
}

export default Player;