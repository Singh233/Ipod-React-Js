import '../styles/Music.css';
import React from 'react';
import Albums from './Music/Albums';
import AllSongs from './Music/AllSongs';
import Artists from './Music/Artists';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


class Music extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props)

        const { navigationActive, menuItem, menuChangeAnimation, coverDisplay} = this.props;
        if (menuItem === 'AllSongs') {
            return (
                <AllSongs navigationActive={navigationActive} />
            );
        } else if (menuItem === 'Artists') {

            return (
                <Artists navigationActive={navigationActive}/>
            );
        } else if (menuItem === 'Albums') {
            return (
                <Albums navigationActive={navigationActive}/>
            );
        } else {
            
            return (
                
                <div className="menu">
                    <div className="nav-links">
                        <header> <img style={{height: 22, width: 22}} src='https://cdn-icons-png.flaticon.com/512/0/747.png'/>  Music </header>
                        <div className={`all-songs animate__animated animate__faster ${navigationActive === 'AllSongs' ? 'active ' + menuChangeAnimation : ''}`}>
                            <img style={{height: 24, width: 24}} className='icon' src='https://cdn-icons-png.flaticon.com/512/6791/6791242.png' />
                            <p>Songs</p>
                            <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faChevronRight}/>

                        </div>

                        <div className={`artists animate__animated animate__faster ${navigationActive === 'Artists' ? 'active ' + menuChangeAnimation : ''}`}>
                            <img className='icon' src='https://cdn-icons-png.flaticon.com/512/875/875590.png' />
                            <p> Artists </p>
                            <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faChevronRight}/>

                        </div>

                        <div className={`albums animate__animated animate__faster ${navigationActive === 'Albums' ? 'active ' + menuChangeAnimation : ''}`}>
                            <img  className='icon' src='https://cdn-icons-png.flaticon.com/512/3871/3871712.png' />
                            <p>Albums</p>
                            <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faChevronRight}/>

                        </div>

                    </div>

                    <div  style={{backgroundSize: coverDisplay.bgSize, backgroundColor: coverDisplay.bgColor, backgroundImage: coverDisplay.url}} className="right-display settings animate__animated animate__faster animate__fadeIn">
                        <img src=''></img>
                    </div>
                </div>
            );
        }
    }
}


export default Music;