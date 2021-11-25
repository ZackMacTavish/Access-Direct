import React, {Component} from 'react';
import '../Ditec/Ditec.styles.scss'
import '../Highpower One/highpower.styles.scss';
import ditechero from './DitecHero.png';
import hanine from '../Ditec/HA9.png';
import banks from '../Highpower One/Banks.png';
import churches from '../Highpower One/Churches.png';
import daycares from '../Highpower One/daycares.png';

import securityicon from '../Highpower One/Security-icon.svg';
import HA7Long from '../Ditec/HA7-Long.png';

import Header from "../../../../base/Header";
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component';
import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
import Footer from '../../Components/Footer/Footer.component';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';




class ditecPage extends Component {
    state= {
        seen: false
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
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
                               Ditec's HA7
                            </h1>

                            <p className="paragraph-text-highpower">
                            Aesthetics and innovation combine in the Ditec HA7. 
                            The slim header blends seamlessly with most standard door frames, and fits into areas where standard operators could not.  
                            Its quick installation and mobile app set-up make it an ideal choice for offices, restrooms and assisted living facilities.

​​                             </p>
                            <div className="button-flexed-highpower">

                            <button 
                                 onClick={this.togglePop}
                                className="Schedule-webinar-button3">Schedule Webinar</button>
                                {this.state.seen ? <Schedule toggle={this.togglePop} /> : null}

                                <button className="download-manual-button3">Download Manual</button>
                            
                            </div>

                            

                            

                        </div>

                    <div className="zamakast-hero-image">
                        <img className="image-2-ditec" src={ditechero} alt="ditec's ha-7" />
                        
                    
                    </div>
                    </div>

                    <div className="highpower-one-mobile-section-container">
                              
                               
                                
                                
                    <div className="ditec-ha9-section-flex">
                                                <div>
                                                    <h5 className="cabinet-locks-header">Ditec's HA9</h5>
                                                    <p className="highpower-paragraph-text">
                                                    The Ditec HA9 low-energy operator comes loaded with features while offering the same quiet, 
                                                    dependable operation you've come to expect in the low-profile header size you love. The HA9 is perfect for high-traffic locations including schools and
                                                     universities, hospitals, retail stores, airports, convention centers, casinos, industrial buildings and offices.</p>
                                               
                                                    <div className="google-apple-flexcontainer">

                                                    <div className="button-flexed-highpower">

                                                        <button className="Schedule-webinar-button3">Schedule Webinar</button>

                                                        <button className="download-manual-button3">Download Manual</button>

                                                    </div>

                                                    </div>
                                                   
                                                </div>

                                            

                             
                                    

                                                <div>
                                                <img className="HA9-styles" src={hanine} alt="zamakast's alfa lock" />
                                                </div>

                        </div>

                        

                            
                        <div className="highpower-blue-shape-container">
                        
                            <h4 className="cabinet-locks-use-cases-header">Use Cases</h4>

                                <div className="use-cases-flex-container">

                                
                                    <img className="banks-image" src={banks} alt="Zamakast's alfa lock" />
                                    <h5 className="lockers-header-text">Banks</h5>
                                    <p className="lockers-text-paragraph">Ditec products are useful to control all doors in a bank.</p>
                                    

                                    
                                    <img className="churches-image" src={churches} alt="Zamakast's alfa lock" />
                                    <h5 className="furniture-header-text">Churches</h5>
                                    <p className="furniture-text-paragraph">Ditec products are useful to control all doors in a church.</p>

                                    <img className="daycares-image" src={daycares} alt="Zamakast's alfa lock" />
                                    <h5 className="storage-header-text">Daycares</h5>
                                    <p className="storage-text-paragraph">Ditec products are useful to control all doors in a Daycare.</p>
                                    
                                </div>
                        
                        
                        </div>
                        
                
                </div>



                <div className="highpower-breakdown-container-section">

                                <img className="HA7-style-long" src={HA7Long} alt="Highpower One and Mobile App" />
                                
                                <img className="hp-security-icon1" src={securityicon} alt="Highpower One and Mobile App" />

                                    <h3 className="hp-secure-header-text">Secure</h3>

                                    <p className="hp-secure-text-paragraph">Built in interface and integrated touchscreen which makes
                                     it ready to use as soon as plugged in. Log of entries and audit </p>

                                     <img className="hp-security-icon2" src={securityicon} alt="Highpower One and Mobile App" />

                                     <h3 className="hp-EasyInstallation-header-text">Easy Installation</h3>

                                     <p className="hp-easyinstallation-text-paragraph">The Alfa lock is easily installed on metal or wood by just screwing 
                                     it in. Lorem Ipsum Doler imight alfa lock for everyone. </p>

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

export default ditecPage;