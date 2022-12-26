import '../styles/Menu.css';
import React from 'react';
import Music from './Music';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


class IpodDefault extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { navigationActive , menuItem, menuChangeAnimation, coverDisplay } = this.props;       
        console.log(coverDisplay); 
        return (
            <div className="menu">
                <div className="nav-links">
                    <header> Ipod </header>
                    <div className={`cover-flow animate__animated animate__faster  ${navigationActive === 'CoverFlow' ? 'active ' + 'animate__slideInUp' : ''}`}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/512/5977/5977575.png'/>
                        <p>Store &nbsp; </p>
                        <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faChevronRight}/>
                    </div>

                    <div className={`music animate__animated animate__faster ${navigationActive === 'Music' ? 'active ' + menuChangeAnimation : ''}`}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/512/7566/7566380.png'/>
                        <p> Music &nbsp; </p>
                        <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faChevronRight}/>
                    </div>

                    <div className={`games animate__animated animate__faster ${navigationActive === 'Games' ? 'active ' + menuChangeAnimation : ''}`}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/512/564/564399.png'/>
                        <p>Games &nbsp; </p>
                        <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faChevronRight}/>
                    </div>

                    <div className={`settings animate__animated animate__faster ${navigationActive === 'Settings' ? 'active ' + menuChangeAnimation : ''}`}>
                        <img className='icon' src='https://cdn-icons-png.flaticon.com/512/3845/3845826.png'/>
                        <p> Setting &nbsp; </p>
                        <FontAwesomeIcon style={{color: '#fff', marginRight: 10}} icon={faChevronRight}/>
                    </div>
                </div>

                <div  style={{backgroundSize: coverDisplay.bgSize, backgroundColor: coverDisplay.bgColor, backgroundImage: coverDisplay.url}} className="right-display settings animate__animated animate__faster animate__fadeIn">
                    {/* <video width="100" height="100" controls >
                        <source src="https://www.youtube.com/watch?v=RI0dWy1CVfw" type="video/mp4"/>
                    </video> */}
                </div>

            </div>
        );
        
    }
}


export default IpodDefault;