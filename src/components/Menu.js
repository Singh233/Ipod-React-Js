import '../styles/Menu.css';
import React from 'react';


class Menu extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="menu">
                <div className="nav-links">
                    <header> Ipod </header>
                    <div className="cover-flow">
                        <p>Cover Flow</p>
                    </div>

                    <div className="music active">
                        <p> Music </p>
                    </div>

                    <div className="games">
                        <p>Games</p>
                    </div>

                    <div className="settings">
                        <p> Setting </p>
                    </div>
                </div>

                <div className="right-display">
                    <img src=''></img>
                </div>
            </div>
        );
    }
}


export default Menu;