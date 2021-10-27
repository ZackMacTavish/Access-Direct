import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';

import './footer.styles.scss';

import logo2 from './Logo2.svg';
import InstagramIcon from './Instagram.svg';
import LinkedInIcon from './LinkedIn.svg';
import YoutubeIcon from './Youtube.svg';

import { Link } from "react-router-dom";
import { AD_CAREERS, AD_TEAM, AD_TRAINING } from '../../../../../const/links';
import logo from './Final-M-SinglePiece-AD-01.svg';


class Footer extends Component {

    
    render() {
        return (

            <div className="footer-container-component">

            <div className="flex-container-footer">

            <img className="AD-Logo" src={logo2} alt="logo" />

            

                            <ul className="footer-links-container">


                            <Link to="./manufacturer" style={{textDecoration:'none', color: 'white'}} >
                    <li className="footer-listitems">MANUFACTURERS</li>
                    </Link>

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
                <a target="_blank" href="https://zackmactavish.github.io/MacTavish/">
                <div className="flex-love">
                <h6 className="made-with-love">Made by MacTavish Designs</h6>
                
                <img src={logo} className="hello" />
                </div>
                </a>
            
            </div>




        )

    }}


export default Footer;