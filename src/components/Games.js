import '../styles/Music.css';
import React from 'react';


class Games extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive } = this.props;
        return (
            <div className="menu">
                Games
            </div>
        );
    }
}


export default Games;