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


            <div className="flex-container-footer">

            <img className="AD-Logo" src={logo2} alt="logo" />

                    <Link className="footer-listitem-1" to="./manufacturer" style={{textDecoration:'none', color: 'white'}} >
                    <li >MANUFACTURERS</li>
                    </Link>

                    <Link className="footer-listitem-5" to="./Highpower" style={{textDecoration:'none', color: 'white'}} >
                    <li >Highpower</li>
                    </Link>

                    <a className="footer-listitems-nostyle footer-listitem-6" href="https://www.info.access-direct.net/pneumatic-switches">
                    <li>Pneumatic Switches</li>
                    </a>

                    <Link className="footer-listitem-7" to="./fobs" style={{textDecoration:'none', color: 'white'}} >
                   <li>Fobs/Cards</li>
                    </Link>

                    <a className="footer-listitems-nostyle footer-listitem-8" href="https://www.info.access-direct.net/record">
                    <li>Record Usa</li>
                    </a>

                    <Link className="footer-listitems-nostyle footer-listitem-9" to="./Zamakast">
                    <li>Zamakast</li>
                    </Link>

                    <Link className="footer-listitems-nostyle footer-listitem-10" to="./Ditec">
                    <li>Ditec</li>
                    </Link>

                    <Link className="footer-listitems-nostyle footer-listitem-11" to="./lifesavers">
                    <li>Lifesavers</li>
                    </Link>

                    <Link className="footer-listitems-nostyle footer-listitem-17" to="./bea">
                    <li>BEA</li>
                    </Link>
                    
                    <Link className="footer-listitems-nostyle footer-listitem-2" to="./Company">
                    <li>COMPANY</li>
                    </Link>

                    <a className="footer-listitems-nostyle footer-listitem-12" href="https://www.info.access-direct.net/leadership">
                    <li>Leadership</li>
                    </a>

                    <a className="footer-listitems-nostyle footer-listitem-13" href="https://www.info.access-direct.net/careers">
                    <li>Opportunities</li>
                    </a>

                    <a className="footer-listitems-nostyle footer-listitem-14" href="https://www.info.access-direct.net/training">
                    <li>Training Information</li>
                    </a>


                    <Link className="footer-listitems-nostyle footer-listitem-3"  to="./terms"  >
                    <li >INDUSTRY TERMS</li>
                    </Link>

                    <a className="footer-listitems-nostyle footer-listitem-15" href="https://www.info.access-direct.net/news-1">
                    <li>News</li>
                    </a>

                    <Link className="footer-listitems-nostyle footer-listitem-16"  to="./products"  >
                    <li>All Products</li>
                    </Link>


                   <a className="footer-listitems-nostyle footer-listitem-4" href="https://www.info.access-direct.net/map">
                    <li>CONTACT</li>
                    </a>

                    <a className="flex-love" target="_blank" href="https://zackmactavish.github.io/MacTavish/">
                
                <h6 className="made-with-love">Site by MacTavish Designs</h6>
                
                <img src={logo} className="hello" />
               
                </a>

                <h6 className="year-update">© 2022 by Access Direct</h6>
            
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




        )

    }}


export default Footer;