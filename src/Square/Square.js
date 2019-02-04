import React from 'react';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 'unselected'
        }
    }

    onClick(event) {
        this.props.setSelected()
    }
    

    render() {
        return(
            <button onClick={this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;