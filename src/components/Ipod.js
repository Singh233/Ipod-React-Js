
import ZingTouch from 'zingtouch';

import song from '../songs/udd_gaye.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Menu from './Menu';

class Ipod extends React.Component {

    constructor() {
        super();
        this.audio = new Audio(song);
        this.state = {
            menuItem: 'Ipod',
            navigationActive: 'Music',
            prevAngle: -1,
            menuChangeAnimation: 'animate__slideInDown',
            coverDisplay: {
                url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?quality=82&strip=all&w=1000")',
                bgColor: '#FB223C',
                bgSize: 'contain'
            },
            song: {
                play: false,
                intervalId: '',
                timelapsed: 0,
            }
        }

        
    }

    componentDidMount() {
        let wheel = document.querySelector('.wheel');
        let activeRegion = ZingTouch.Region(wheel);

        activeRegion.bind(wheel, 'rotate', function(event) {
            
            console.log();

            // let angleChanged = event.detail.angle - event.detail.distanceFromLast;
            let angle = Math.floor(event.detail.distanceFromOrigin);
            let prevAngle = this.state.prevAngle;

            // for clockwise rotation
            if (angle % 15 === 0 && angle != 0 && prevAngle != angle && prevAngle < angle) {
                console.log('**********');
                let menuItem = this.state.menuItem;
                if (menuItem === 'Ipod') {
                    let nav = this.state.navigationActive;
                    this.setState({
                        navigationActive: nav === 'CoverFlow' ? 'Music' 
                            : nav === 'Music' ? 'Games' 
                            : nav === 'Games' ? 'Settings' 
                            : 'CoverFlow',
                        prevAngle: angle,
                        menuChangeAnimation: 'animate__slideInDown',
                        coverDisplay: nav === 'CoverFlow' ? {
                                url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?quality=82&strip=all&w=1000")',
                                bgColor: '#FB223C',
                                bgSize: 'contain'
                            }
                            : nav === 'Music' ? {
                                url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2020/02/Apple-Arcade.png")',
                                bgColor: '#020202',
                                bgSize: 'contain'
                            }  
                            : nav === 'Games' ? {
                                url: 'url("https://www.apple.com/newsroom/images/values/privacy/apple_privacy-day_privacy-logo_01282021.jpg.og.jpg?202211070422")',
                                bgColor: '#020202',
                                bgSize: 'contain'
                            }  
                            : {
                                url: 'url("https://www.androidauthority.com/wp-content/uploads/2020/06/Apple-WWDC-2020-iOS-apps.jpg")',
                                bgColor: '#fff',
                                bgSize: 'cover'
                            } ,
                    }, () => console.log(this.state.coverImage));
                } else if (menuItem === 'Music') {
                    let nav = this.state.navigationActive;
                    this.setState({
                        navigationActive: nav === 'AllSongs' ? 'Artists' 
                            : nav === 'Artists' ? 'Albums' 
                            : 'AllSongs',
                        prevAngle: angle,
                        menuChangeAnimation: 'animate__slideInDown',
                        coverDisplay: nav === 'AllSongs' ? {
                            url: 'url("https://atwoodmagazine.com/wp-content/uploads/2021/01/Atwood-Magazines-2021-Artists-to-Watch.jpg")',
                            bgColor: '#FB223C',
                            bgSize: 'cover'
                        }
                        : nav === 'Artists' ? {
                            url: 'url("https://www.digitalmusicnews.com/wp-content/uploads/2021/12/most-streamed-artist-spotify-2021-feat.jpeg")',
                            bgColor: '#020202',
                            bgSize: 'cover'
                        }  
                        : {
                            url: 'url("https://cdn.dribbble.com/userupload/3364429/file/original-cff18de360318ec6b03847c32e1c9568.png?compress=1&resize=2048x1600")',
                            bgColor: '#fff',
                            bgSize: 'cover'
                        } ,
                    });
                }
                     // for anti-clockwise rotation
            } else if (angle % 15 === 0 && angle != 0 && prevAngle != angle && prevAngle > angle) {
                let menuItem = this.state.menuItem;
                if (menuItem === 'Ipod') {
                    let nav = this.state.navigationActive;
                    this.setState({
                        navigationActive: nav === 'CoverFlow' ? 'Settings' 
                            : nav === 'Music' ? 'CoverFlow' 
                            : nav === 'Games' ? 'Music' 
                            : 'Games',
                        prevAngle: angle,
                        menuChangeAnimation: 'animate__slideInUp',
                        coverDisplay: nav === 'CoverFlow' ? {
                            url: 'url("https://www.apple.com/newsroom/images/values/privacy/apple_privacy-day_privacy-logo_01282021.jpg.og.jpg?202211070422")',
                            bgColor: '#020202',
                            bgSize: 'contain'
                        } 
                        : nav === 'Music' ? {
                            url: 'url("https://www.androidauthority.com/wp-content/uploads/2020/06/Apple-WWDC-2020-iOS-apps.jpg")',
                            bgColor: '#fff',
                            bgSize: 'cover'
                        }  
                        : nav === 'Games' ? {
                            url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?quality=82&strip=all&w=1000")',
                            bgColor: '#FB223C',
                            bgSize: 'contain'
                        }  
                        : {
                            url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2020/02/Apple-Arcade.png")',
                            bgColor: '#020202',
                            bgSize: 'contain'
                        }   ,

                    });
                } else if (menuItem === 'Music') {
                    let nav = this.state.navigationActive;
                    this.setState({
                        navigationActive: nav === 'AllSongs' ? 'Albums' 
                            : nav === 'Artists' ? 'AllSongs' 
                            : 'Artists',
                        prevAngle: angle,
                        menuChangeAnimation: 'animate__slideInUp',
                        coverDisplay: nav === 'AllSongs' ? {
                            url: 'url("https://www.digitalmusicnews.com/wp-content/uploads/2021/12/most-streamed-artist-spotify-2021-feat.jpeg")',
                            bgColor: '#020202',
                            bgSize: 'cover'
                        }
                        : nav === 'Artists' ? {
                            url: 'url("https://cdn.dribbble.com/userupload/3364429/file/original-cff18de360318ec6b03847c32e1c9568.png?compress=1&resize=2048x1600")',
                            bgColor: '#fff',
                            bgSize: 'cover'
                        } 
                        : {
                            url: 'url("https://atwoodmagazine.com/wp-content/uploads/2021/01/Atwood-Magazines-2021-Artists-to-Watch.jpg")',
                            bgColor: '#FB223C',
                            bgSize: 'cover'
                        } ,

                    });
                }
            }
        }.bind(this));
    }

    // function on selecting the option from menu
    optionSelect = (state) => {
        const { navigationActive, menuItem } = this.state;
        
        if (menuItem === 'Music') {
            console.log('inside music')
            this.setState({
                menuItem: navigationActive,
                navigationActive: navigationActive 
            });
        } else if (menuItem === 'Ipod') {
            if (navigationActive === 'Music') {
                this.setState({
                    menuItem: navigationActive,
                    navigationActive: 'AllSongs',
                }, () => console.log(this.state));
            } else {
                this.setState({
                    menuItem: navigationActive,
                    navigationActive: navigationActive,
                }, () => console.log(this.state));
            }
            
        }
    }

    // function on clicking menu 
    menuSelect = () => {
        const { menuItem, navigationActive } = this.state;

        console.log('Menu clicked')
        if (menuItem === 'Music' || menuItem === 'CoverFlow' || menuItem === 'Games' || menuItem === 'Settings') {
            this.setState({
                menuItem: 'Ipod',
                navigationActive: menuItem 
            })
        } else if (menuItem === 'AllSongs' || menuItem === 'Artists' || menuItem === 'Albums') {
            this.setState({
                menuItem: 'Music',
                navigationActive: menuItem 
            })
        }
    }


    // function for pause and play music

    playOrPause = () => {
        const {play} = this.state.song;
        console.log("play pause", play);
        // this.setState({
        //     song: {
        //         play: !play
        //     }
        // }, () => {
        //     if (this.state.song.play) {
        //         this.audio.play();
        //         let intervalId = setInterval(() => {
        //             console.log('playing');
        //         }, 1000);
        //         this.setState({
        //             song: {
        //                 intervalId: intervalId
        //             }
        //         });
        //     } else {
        //         this.audio.pause();
        //         clearInterval(this.state.song.intervalId);
        //     }
        // });

        let intervalId = setInterval(() => {
            if (this.audio.paused) {
                console.log("stop")
                clearInterval(intervalId);
            } else {
                const {song} = this.state;
                // console.log(song);
                // const elapse = new Date().getTime();
                // let now = new Date().getTime();
                // var distance = (elapse + 180000) - now;
                let count2 = song.timelapsed;
                let minutes = Math.floor(count2 / 60);
                // let minutes = Math.floor((count2 % (1000 * 60 * 60)) / (1000 * 60));
                // let seconds = Math.floor((count2 % (1000 * 60)) / 1000);
                let count1 = 0;
                this.setState({
                    song: {
                        timelapsed: count2 + 1,
                        intervalId: intervalId,
                        play: true
                    }
                }, () => console.log("playing", Math.floor(count2 / 60), (count2 - (minutes * 60))));
                
            }
        }, 1000);
        const {song} = this.state;

        this.setState({
            song: {
                play: !play,
                timelapsed: song.timelapsed,
                intervalId: intervalId
            }
        }, () => {
            if (this.state.song.play) {
                this.audio.play();
            } else {
                clearInterval(intervalId);

                this.audio.pause();
            }
        });

        
        

    }
    

    render() {

        const { navigationActive, menuItem, menuChangeAnimation, coverDisplay, song } = this.state;
        
        return (
        
        <div className="App">

            <div className='ipod-container'>
                <Menu navigationActive={navigationActive} menuItem={menuItem} menuChangeAnimation={menuChangeAnimation}  coverDisplay={coverDisplay} song={song} />
                <div className='wheel'>
                    <div className='inner-div' onClick={this.optionSelect} >
                    </div>
                    <div className='buttons'>
                        <p className='menu-button' onClick={this.menuSelect}><FontAwesomeIcon icon={faBarsStaggered}/></p>
                        <p className='forward-button'><FontAwesomeIcon icon={faForward}/></p>
                        <p className='backward-button'><FontAwesomeIcon icon={faBackward}/></p>
                        <p onClick={this.playOrPause} className='pause-button'><FontAwesomeIcon icon={faPlay}/> <FontAwesomeIcon icon={faPause}/></p>
                    </div>
                </div>

                <img className='icon' style={{marginBottom: 20}} src='https://cdn-icons-png.flaticon.com/512/731/731985.png'></img>
                <p className='icon-text'>Designed in India</p>
            </div>
            
        </div>
        );
        
    }
}

export default Ipod;
