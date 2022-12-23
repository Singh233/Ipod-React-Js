import '../styles/Menu.css';
import React from 'react';


class Menu extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive } = this.props;
        return (
            <div className="menu">
                <div className="nav-links">
                    <header> Ipod </header>
                    <div className={`cover-flow ${navigationActive === 'cover-flow' ? 'active' : ''}`}>
                        <p>Cover Flow</p>
                    </div>

                    <div className={`music ${navigationActive === 'music' ? 'active' : ''}`}>
                        <p> Music </p>
                    </div>

                    <div className={`games ${navigationActive === 'games' ? 'active' : ''}`}>
                        <p>Games</p>
                    </div>

                    <div className={`settings ${navigationActive === 'settings' ? 'active' : ''}`}>
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