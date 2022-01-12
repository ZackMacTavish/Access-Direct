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
import calroyal from './cal-royal-logo-blue 1.png';
import abh from './ABH (1) 1.png';
import dormakaba from './DormaKaba 1.png';
import camden from './Camden 1.png';
import highpower from './Highpowerlogo-01 1.png';
import farpointe from './fp_logo_hr 1.png';
import record from './record_logo 1.png';
import donjo from './DONJO-LOGO 1.png';
import westpenn from './West Penn 1.png';
import zamakast from './zamakast-logo 1.png';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';






class homePage extends Component {
    state= {
        seen: false
    };
    
    togglePop = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    render() {
        
        
        return (
            <div className="home-page">
                {window.innerWidth > 800 ? <Header/> : <ResponsiveHeader /> }



               <div className="container-landing">
                    <h1 className="text-landing">Access Direct will work with you to figure out security solutions ranging from products to installation.</h1>
                    <button onClick={event =>  window.location.href='/products'} className="left-button">Browse our products</button>
                      <button 
                      onClick={this.togglePop}
                      className="right-button">Reach Out To Us</button> 
                      {this.state.seen ? <Schedule toggle={this.togglePop} /> : null}
                
                    <div className="gradient-section" > </div>

                </div>
                    <div className="second-section-container">
                    <img className="highpower-box"
                    src={highpowerbox} />

                    <div className="text-button-container">
                        <h2 className="highpower-one-header">The Highpower One</h2>
                        <h3 className="highpower-one-landing-text">The Highpower One is an 8 Door controller with an integrated touchscreen. Log of entries and audit trail available on screen and via software or USB memory stick. Audit trail can be pulled onto the USB as an Excel file. Unit runs as stand-alone or connected to software, which allows two or more units to communicate. Wi/Fi and Ethernet connections included, as well as USB connection for standalone mode. ​​</h3>
                        <button 
                        onClick={event =>  window.location.href='/highpower'}
                        className="left-button-2">Learn More</button>
                    </div>
                 </div>


                        <div className="third-section-container">

                            <h2 className="our-focus-header">Our Focus</h2>

                                <div className="flex-containers-wholesale-nationalprojects">

                                    <div className="wholesale-section">
                                    <img className="wholesale-box-icon" src={wholesalebox} />
                                    <h3 className="wholesaling-header-text">Wholesaling and Distribution</h3>
                                    <h4 className="wholesaling-text-section">Access Direct offers a variety of products and our team is ready to work with you on the best solution for you.   </h4>
                                    <button 
                                    onClick={event =>  window.location.href='/Oops'}
                                    className="right-button-2">Learn More</button>
                                    </div>

                                    <div className="nationalprojects-section">
                                    <img className="wholesale-box-icon" src={nationalicon} />
                                    <h3 className="nationalprojects-header-text">National Project Installation</h3>
                                    <h4 className="national-text-section">Access Direct is ready to assist you directly with your project. We employ a national team of installers who are ready to assist.</h4>
                                    <button 
                                    onClick={event =>  window.location.href='https://www.info.access-direct.net/careers'}
                                    className="right-button-2">Learn More</button>
                                    </div>
                                
                                
                                </div>
                    </div>
                   
                           <div className="product-large-images-button-section" >
                          
                                    
                                        <div className="pneumatic-button-image-flex grid-1">
                                            <img src={pneumaticsection} />
                                            <button 
                                            onClick={event =>  window.location.href='https://www.info.access-direct.net/pneumatic-switches'}
                                            className="left-button-3">Pneumatic Switches</button>
                                            
                                        </div>

                                        <div className="pneumatic-button-image-flex grid-2">
                                        <img src={fobssection} />
                                        <button 
                                        onClick={event =>  window.location.href='./fobs'}
                                        className="left-button-3">Fobs &
                                        Prox Cards</button>
                                    </div>

                                    <div className="pneumatic-button-image-flex grid-3">
                                    <img src={fobcustomizersection} />
                                    <button 
                                    onClick={event =>  window.location.href='/fob'}
                                    className="left-button-3">Custom Fob Logo</button>
                                </div>

                              <div className="pneumatic-button-image-flex grid-4">
                                            <img src={alfasection} />
                                            <button 
                                            onClick={event =>  window.location.href='/Zamakast'}
                                            className="left-button-3">Alfa Lock</button>
                                        </div>

                                        <div className="pneumatic-button-image-flex grid-5">
                                        <img src={doorsection} />
                                        <button 
                                        onClick={event =>  window.location.href='/ditec'}
                                       
                                        className="left-button-3">Door Operators</button>
                                    </div>

                                    <div className="pneumatic-button-image-flex grid-6">
                                    <img src={allproducts} />
                                    <button 
                                    onClick={event =>  window.location.href='/products'}
                                    className="left-button-3">All Products</button>
                                </div>

                            </div>


                            <h2 className="header-brands">Brands we carry</h2>
                            <div className="brands-we-carry-section">
                            

                            
                            <img className="brands-1" src={calroyal} />
                            <img className="brands-2" src={dormakaba} />
                            <img className="brands-3" src={abh} />
                            <img className="brands-4" src={camden} />

                            <a  className="brands-10"
                            href="/highpower">
                            <img src={highpower} />
                            </a>
                            
                            <img className="brands-5" src={farpointe} />
                            <img className="brands-6" src={record} />
                            <img className="brands-7" src={donjo} />
                            <img className="brands-8" src={westpenn} />
                            <img className="brands-9" src={zamakast} />
                           
                            
                            </div>


                              
                                    
                      
                          
                            
                       <Footer />

            </div>
        );
    }
}

export default homePage;