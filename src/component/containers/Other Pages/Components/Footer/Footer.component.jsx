import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';

import './footer.styles.scss';

import logo2 from './Logo2.svg';
import InstagramIcon from './Instagram.svg';
import LinkedInIcon from './LinkedIn.svg';
import YoutubeIcon from './Youtube.svg';

import { Link } from "react-router-dom";
import { AD_CAREERS, AD_TEAM, AD_TRAINING } from '../../../../../const/links';


class Footer extends Component {

    
    render() {
        return (

            <div className="footer-container-component">

            <div className="flex-container-footer">

            <img src={logo2} alt="logo" />

                            <ul className="footer-links-container">
                           <a className="footer-listitems-nostyle" href={AD_CAREERS}>
                    <li className="footer-listitems">CAREERS</li>
                    </a>

                    <a className="footer-listitems-nostyle" href={AD_TEAM}  >
                    <li className="footer-listitems">OUR TEAM</li>

                    </a>

                   <a className="footer-listitems-nostyle" href={AD_TRAINING}>
                    <li className="footer-listitems">TRAINING</li>
                    </a>
                    
                </ul>

                <div className="social-media-icons">
                <a href="https://www.instagram.com/access_direct/">
                    <img className="social-media-icon-styling" src={InstagramIcon} alt="instagram-icon" />
                    </a>

                    <a href="https://www.linkedin.com/company/access-direct-inc.">
                    <img  className="social-media-icon-styling" src={LinkedInIcon} alt="instagram-icon" />
                    </a>
                    <a href="https://www.youtube.com/channel/UChZk-NCq3eoLYSJaWwct3ng">
                    <img className="social-media-icon-styling" src={YoutubeIcon} alt="instagram-icon" />
                    </a>
           
                </div>

       

                </div>
                <div className="flex-love">
                <h6 className="made-with-love">Made by MacTavish Designs</h6><h6 className="hello">👋🏼</h6> 
                </div>
            
            </div>




        )

    }}


export default Footer;