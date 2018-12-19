import React, { Component } from 'react';

class Square extends React.Component {
    render() {
        return(
            <button>
                {this.props.value}
            </button>
        )
    }
}

export default Square;