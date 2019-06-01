import React from 'react';

const Square = (props) => {

    return (
        <button disabled={props.disabled ? true : false } onClick={props.onClick}>
            {props.value}
        </button>
    );
};

export default Square;