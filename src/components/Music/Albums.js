import React from 'react';


class Albums extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive } = this.props;
        return (
            <div className="menu text-deco">
                Albums
            </div>
        );
    }
}


export default Albums;