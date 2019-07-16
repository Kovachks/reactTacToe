import React from 'react';
import { Button } from 'antd';

const Concede = props => {

    return (
        <div>
            <Button style={{'width': '95px'}} type="primary" onClick={() => props.onClick(props.player)}>Concede?</Button>
        </div>
    );
};

export default Concede;