import React from 'react';
import '../../styles/AllSongs.css'
import '../../songs/udd_gaye.mp3'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";

class AllSongs extends React.Component {
    constructor() {
        super();
    }



    render() {
        const { navigationActive, song } = this.props;
        let timelapsed = song.timelapsed;
        let minutes = Math.floor(song.timelapsed / 60);
        let seconds = song.timelapsed - (minutes * 60);
        // if (song.play) {
        //     this.timeline(song.play);
        // } else {
        //     this.timeline(false);
        // }
        return (
            <div className="song-container animate__animated animate__faster animate__fadeIn">
                <div className='header'>
                <audio id="audioElement">
                    <source src="../../songs/udd_gaye.mp3" />
                </audio>

                </div>

                <div className='cover-img'>
                    {/* <FontAwesomeIcon icon={faChevronLeft}/> */}
                    <img src='https://i.scdn.co/image/ab67616d0000b2730c3c9fa1d5d9d7770d897f2a' />
                    {/* <FontAwesomeIcon icon={faChevronRight}/> */}
                </div>

                <div className='music-controls'>
                    <p className='song-name'><FontAwesomeIcon className='song-icon' icon={faHeadphonesSimple}/> Udd Gaye</p>
                    <p className='artist-name'><FontAwesomeIcon  icon={faPodcast}/> &nbsp;Ritviz</p>
                    <div className='progress-container'>
                        <p className='time'>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
                        <div className='progress-bar'>
                            <div style={{width: timelapsed}} className='progress-done'>

                            </div>
                        </div>
                        <p>3:00</p>

                    </div>

                    <div className='song-buttons'>
                        <FontAwesomeIcon icon={faBackward}/>
                        <FontAwesomeIcon className='' icon={song.play ? faPause : faPlay}/>
                        <FontAwesomeIcon icon={faForward}/>
                        
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default AllSongs;