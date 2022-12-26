import React from 'react';


class AllSongs extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive } = this.props;
        return (
            <div className="menu">
                AllSongs
            </div>
        );
    }
}


export default AllSongs;