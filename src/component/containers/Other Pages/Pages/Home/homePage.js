import React, {Component} from 'react';
import "./homepage.styles.scss";
import wholesalebox from './wholesalers.png'
import highpowerbox from './Asset 1@4x 1.png'
import nationalicon from './NationalProjects-icon.png';
import pneumaticsection from './PneumaticSwitch-Container 1 (1).png';
import fobcustomizersection from './AD-Web-CustomizeFob-Container 1.png';
import fobssection from './AD-Web-Fob-Container 1.png'
import alfasection from './alfalock2 1 (1).png';
import doorsection from './Record-Container-01 2.png';
import Header from "../../../../base/Header";
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component';
import allproducts from './AllProducts-01 1.png';
import Footer from '../../Components/Footer/Footer.component';






class homePage extends Component {
    render() {
        
        
        return (
            <div className="home-page">
                {window.innerWidth > 800 ? <Header/> : <ResponsiveHeader /> }



               <div className="container-landing">
                    <h1 className="text-landing">Access Direct will work with you to figure out security solutions ranging from products to installation.</h1>
                    <button className="left-button">Browse our products</button>
                    <button className="right-button">Schedule a call with us</button>
                
                    <div className="gradient-section" > </div>

                </div>
                    <div className="second-section-container">
                    <img className="highpower-box"
                    src={highpowerbox} />

                    <div className="text-button-container">
                        <h2 className="highpower-one-header">The Highpower One</h2>
                        <h3 className="highpower-one-landing-text">The Highpower One is an 8 Door controller with an integrated touchscreen. Log of entries and audit trail available on screen and via software or USB memory stick. Audit trail can be pulled onto the USB as an Excel file. Unit runs as stand-alone or connected to software, which allows two or more units to communicate. Wi/Fi and Ethernet connections included, as well as USB connection for standalone mode. ​​</h3>
                        <button className="left-button-2">Learn More</button>
                    </div>
                 </div>


                        <div className="third-section-container">

                            <h2 className="our-focus-header">Our Focus</h2>

                                <div className="flex-containers-wholesale-nationalprojects">

                                    <div className="wholesale-section">
                                    <img className="wholesale-box-icon" src={wholesalebox} />
                                    <h3 className="wholesaling-header-text">Wholesaling and Distribution</h3>
                                    <h4 className="wholesaling-text-section">Access Direct offers a variety of products and our team is ready to work with you on the best solution for you.   </h4>
                                    <button className="right-button-2">Learn More</button>
                                    </div>

                                    <div className="nationalprojects-section">
                                    <img className="wholesale-box-icon" src={nationalicon} />
                                    <h3 className="nationalprojects-header-text">National Project Managers</h3>
                                    <h4 className="national-text-section">Access Direct is ready to assist you directly with your project. We employ a national team of installers who are ready to assist.</h4>
                                    <button className="right-button-2">Learn More</button>
                                    </div>
                                
                                
                                </div>
                    </div>
                   
                           <div className="product-large-images-button-section" >
                           <div className="row">
                                    
                                        <div className="pneumatic-button-image-flex">
                                            <img src={pneumaticsection} />
                                            <button className="left-button-3">Pneumatic Switches</button>
                                        </div>

                                        <div className="pneumatic-button-image-flex">
                                        <img src={fobssection} />
                                        <button className="left-button-3">Fobs &
                                        Prox Cards</button>
                                    </div>

                                    <div className="pneumatic-button-image-flex">
                                    <img src={fobcustomizersection} />
                                    <button className="left-button-3">Custom Fob Logo</button>
                                </div>

                                </div>

                                <div className="row">

                                <div className="pneumatic-button-image-flex">
                                            <img src={alfasection} />
                                            <button className="left-button-3">Alfa Lock</button>
                                        </div>

                                        <div className="pneumatic-button-image-flex">
                                        <img src={doorsection} />
                                        <button className="left-button-3">Door Operators</button>
                                    </div>

                                    <div className="pneumatic-button-image-flex">
                                    <img src={allproducts} />
                                    <button className="left-button-3">All Products</button>
                                </div>

                                </div>
                              
                                    
                           </div>

                          
                            
                       <Footer />

            </div>
        );
    }
}

export default homePage;