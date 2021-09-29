import React, {Component} from 'react';
import './highpower.styles.scss';

import heroimage2 from './highpowerhero.png';
import cell from './cell.png';
import banks from './Banks.png';
import churches from './Churches.png';
import daycares from './daycares.png';
import googleplay from './Google-play.png';
import appstore from './app-store.png';
import securityicon from './Security-icon.svg';
import highpowervertical from './HighpowerOne-phone.png';


import Header from "../../../../base/Header";
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component';
import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
import Footer from '../../Components/Footer/Footer.component';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';




class highpowerPage extends Component {
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
            <div className="highpower-page">
                {window.innerWidth > 800 ? <Header/> : <ResponsiveHeader /> }

                    <div className="highpower-hero-flex-container">
                    <div className="header-paragraph-container">
                            <h1 className="highpower-header">
                               Highpower One
                            </h1>

                            <p className="paragraph-text-highpower">
                            The Highpower One is an 8 Door controller with an integrated touchscreen. 
                            Log of entries and audit trail available on screen and via software or USB memory stick. 
                            Audit trail can be pulled onto the USB as an Excel file. 
                            Unit runs as stand-alone or connected to software, which allows two or more units to communicate. 
                            Wi/Fi and Ethernet connections included, as well as USB connection for standalone mode. 

​​                             </p>
                            <div className="button-flexed-highpower">

                                <button 
                                 onClick={this.togglePop}
                                className="Schedule-webinar-button">Schedule Webinar</button>
                                {this.state.seen ? <Schedule toggle={this.togglePop} /> : null}

                              

                                <a href="https://highpowersecurity.com/wp-content/uploads/2021/04/hp1man29.pdf" target="_blank" className="download-manual-button">Download Manual</a>

                                
                            
                            </div>

                            

                        </div>

                    <div className="zamakast-hero-image">
                        <img className="image-2-highpower" src={heroimage2} alt="zamakast's alfa lock" />
                        
                    
                    </div>
                    </div>

                    <div className="highpower-one-mobile-section-container">
                              
                               
                                
                                
                    <div className="cellphone-section-flex">
                                                <div>
                                                    <h5 className="cabinet-locks-header">HighPower One Mobile App</h5>
                                                    <p className="highpower-paragraph-text">
                                                    The Highpower One App allows control to all of your access points from your phone. 
                                                    Scan the qr code below to be directed to the app in Google Play, or the App Store.</p>
                                                    <div className="google-apple-flexcontainer">
                                                    <img className="googleplay-image" src={googleplay} alt="zamakast's alfa lock" />
                                                    <img className="appstore-image" src={appstore} alt="zamakast's alfa lock" />
                                                    </div>
                                                   
                                                </div>

                                            

                             
                                    

                                                <div>
                                                <img className="cell-image-highpower" src={cell} alt="zamakast's alfa lock" />
                                                </div>

                        </div>

                        

                            
                        <div className="highpower-blue-shape-container">
                        
                            <h4 className="cabinet-locks-use-cases-header">Use Cases</h4>

                                <div className="use-cases-flex-container">

                                
                                    <img className="banks-image" src={banks} alt="Zamakast's alfa lock" />
                                    <h5 className="lockers-header-text">Banks</h5>
                                    <p className="lockers-text-paragraph">Highpower One is useful to control all access points in a bank.</p>
                                    

                                    
                                    <img className="churches-image" src={churches} alt="Zamakast's alfa lock" />
                                    <h5 className="furniture-header-text">Churches</h5>
                                    <p className="furniture-text-paragraph">Highpower One is useful to control all access points in a church.</p>

                                    <img className="daycares-image" src={daycares} alt="Zamakast's alfa lock" />
                                    <h5 className="storage-header-text">Daycares</h5>
                                    <p className="storage-text-paragraph">Highpower One is useful to control all access points in a daycare.</p>
                                    
                                </div>
                        
                        
                        </div>
                        
                
                </div>



                <div className="highpower-breakdown-container-section">

                                <img className="highpower-mobile-image-breakdown" src={highpowervertical} alt="Highpower One and Mobile App" />
                                
                                <img className="hp-security-icon1" src={securityicon} alt="Highpower One and Mobile App" />

                                    <h3 className="hp-secure-header-text">Secure</h3>

                                    <p className="hp-secure-text-paragraph">Built in interface and integrated touchscreen which makes
                                     it ready to use as soon as plugged in. Log of entries and audit </p>

                                     <img className="hp-security-icon2" src={securityicon} alt="Highpower One and Mobile App" />

                                     <h3 className="hp-EasyInstallation-header-text">Easy Installation</h3>

                                     <p className="hp-easyinstallation-text-paragraph">The Highpower One is easily installed on metal or wood by just screwing 
                                     it in. </p>

                                     <img className="hp-security-icon3" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Adaptable-header-text">Adaptable</h3>

                                     <p className="hp-adaptable-text-paragraph">The Alfa lock is easily installed on metal or wood by just screwing 
                                     it in. Lorem Ipsum Doler imight alfa lock for everyone. </p>

                                     <img className="hp-security-icon4" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Easyuse-header-text">Easy Use</h3>

                                     <p className="hp-Easyuse-text-paragraph">The Alfa lock is easily installed on metal or wood by just screwing 
                                     it in. Lorem Ipsum Doler imight alfa lock for everyone. </p>

                            
                            
                            
                            </div>

                       

                           
                       
                   
                        
                        <div className="highpower-one-spacing">
                        <OtherProducts />
                        </div>
                            

                           
                            
                       <Footer />

            </div>
        );
    }
}

export default highpowerPage;