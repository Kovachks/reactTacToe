import React from 'react';

class User extends React.Component {
    state = {

    };

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>This is a test</div>
        );
    };
};

export default User;