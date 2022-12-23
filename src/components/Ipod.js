
import ZingTouch from 'zingtouch';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Menu from './Menu';

class Ipod extends React.Component {

    constructor() {
        super();
        this.state = {
            navigationActive: 'music',
            prevAngle: -1
        }
    }

    componentDidMount() {
        let ipodContainer = document.querySelector('.ipod-container');
        let activeRegion = ZingTouch.Region(ipodContainer);

        let wheel = document.querySelector('.wheel');
        activeRegion.bind(wheel, 'rotate', function(event) {
            console.log(event.detail);
            console.log();

            // let angleChanged = event.detail.angle - event.detail.distanceFromLast;
            let angle = Math.floor(event.detail.distanceFromOrigin);
            let prevAngle = this.state.prevAngle;
            if (angle % 15 === 0 && angle != 0 && prevAngle != angle) {
                console.log('**********');
                let nav = this.state.navigationActive;
                this.setState({
                    navigationActive: nav === 'cover-flow' ? 'music' 
                        : nav === 'music' ? 'games' 
                        : nav === 'games' ? 'settings' 
                        : 'cover-flow',
                    prevAngle: angle
                });

            }
        }.bind(this));
    }
    

    render() {

        const { navigationActive } = this.state;
        
        return (
        
        <div className="App">

            <div className='ipod-container'>
                <Menu navigationActive={navigationActive}/>
                <div className='wheel'>
                    <div className='inner-div'>
                    </div>
                    <div className='buttons'>
                        <p className='menu-button'>Menu</p>
                        <p className='forward-button'><FontAwesomeIcon icon={faForward}/></p>
                        <p className='backward-button'><FontAwesomeIcon icon={faBackward}/></p>
                        <p className='pause-button'><FontAwesomeIcon icon={faPlay}/> <FontAwesomeIcon icon={faPause}/></p>
                    </div>
                </div>

            
            </div>
            
        </div>
        );
        
    }
}

export default Ipod;
