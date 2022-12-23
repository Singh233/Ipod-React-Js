
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
    }

    componentDidMount() {
        let ipodContainer = document.querySelector('.ipod-container');
        let activeRegion = ZingTouch.Region(ipodContainer);

        let wheel = document.querySelector('.wheel');
        activeRegion.bind(wheel, 'rotate', function(event) {
            console.log(event.detail.distanceFromOrigin);
            console.log();

            // let angleChanged = event.detail.angle - event.detail.distanceFromLast;
            if (Math.floor(event.detail.distanceFromOrigin) % 15 === 0) {
                console.log('**********');
                
            }
        });
    }
    

    render() {
        
        return (
        
        <div className="App">

            <div className='ipod-container'>
                <Menu/>
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
