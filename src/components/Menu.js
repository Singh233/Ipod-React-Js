import '../styles/Menu.css';
import React from 'react';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import CoverFlow from './CoverFlow';
import IpodDefault from './IpodDefault';


class Menu extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive , menuItem, menuChangeAnimation, coverDisplay } = this.props;
        let component = menuItem;
        console.log(menuItem);
        
        if (menuItem === 'Ipod') {
            return (
                <IpodDefault navigationActive={navigationActive} menuChangeAnimation={menuChangeAnimation} coverDisplay={coverDisplay} />
            );
        } else if (menuItem === 'Music' || menuItem === 'AllSongs' || menuItem === 'Artists' || menuItem === 'Albums') {
            return (
                <Music navigationActive={navigationActive} menuItem={menuItem} menuChangeAnimation={menuChangeAnimation} coverDisplay={coverDisplay}/>
            );
        } else if (menuItem === 'Games') {
            return (
                <Games navigationActive={navigationActive}/>
            );
        } else if (menuItem === 'Settings') {
            return (
                <Settings />
            );
        } else {
            return (
                <CoverFlow />
            );
        }
        
        
    }
}


export default Menu;