import React from 'react';


class Albums extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive } = this.props;
        return (
            <div className="menu">
                Albums
            </div>
        );
    }
}


export default Albums;