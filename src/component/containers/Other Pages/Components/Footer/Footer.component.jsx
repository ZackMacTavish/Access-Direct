import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';

import './footer.styles.scss';

import logo2 from './Logo2.svg';
import InstagramIcon from './Instagram.svg';
import LinkedInIcon from './LinkedIn.svg';
import YoutubeIcon from './Youtube.svg';


class Footer extends Component {

    
    render() {
        return (

            <div className="footer-container-component">

            <div className="flex-container-footer">

            <img src={logo2} alt="logo" />

                            <ul className="footer-links-container">
                    <li className="footer-listitems">CAREERS</li>
                    <li className="footer-listitems">OUR TEAM</li>
                    <li className="footer-listitems">TRAINING</li>
                    
                </ul>

                <div className="social-media-icons">
                    <img className="social-media-icon-styling" src={InstagramIcon} alt="instagram-icon" />
                    <img  className="social-media-icon-styling" onClick={this.redirectlinkedIn} src={LinkedInIcon} alt="instagram-icon" />
                    <img className="social-media-icon-styling" src={YoutubeIcon} alt="instagram-icon" />
                
                
                </div>

       

                </div>
            
            </div>




        )

    }}


export default Footer;