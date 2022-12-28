import React from 'react';


class Artists extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive } = this.props;
        return (
            <div className="menu text-deco">
                Artists
            </div>
        );
    }
}


export default Artists;