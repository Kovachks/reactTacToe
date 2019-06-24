import React from 'react';

const ScoreCard = (props) => {
    return (
        <div>{props.player} board wins: {props.wins}</div>
    );
};

export default ScoreCard;