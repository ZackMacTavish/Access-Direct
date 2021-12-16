import React, {Component} from 'react';
import '../BEA/BEA.styles.scss'
import '../Highpower One/highpower.styles.scss';
import beahero from './BEAHero.png';
import hanine from '../BEA/MS41-FAMILY.png';
import banks from '../Highpower One/Banks.png';
import churches from '../Highpower One/Churches.png';
import daycares from '../Highpower One/daycares.png';

import securityicon from '../Highpower One/Security-icon.svg';
import HA7Long from '../BEA/MS41-R.png';

import Header from "../../../../base/Header";
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component';
import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
import Footer from '../../Components/Footer/Footer.component';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';
import { HeroImage } from '../../Components/Hero Image Component/herocomponent';




class beaPage extends Component {
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
                               BEA's MS31
                            </h1>

                            <p className="paragraph-text-highpower">
                            The MS31 detects moving objects such as a hand, cart or wheelchair and reduces touchpoints in high traffic areas commonly found in shopping and transportation centers. 
                            Applications requiring hygienic activation include hospitals, pharmacies, clean rooms and foodservice facilities.

​​                             </p>
                            <div className="button-flexed-highpower">

                            <button 
                                 onClick={this.togglePop}
                                className="Schedule-webinar-button3">Schedule Webinar</button>
                                {this.state.seen ? <Schedule toggle={this.togglePop} /> : null}

                                 {/* <button className="download-manual-button3">Download Manual</button> */}
                            
                            </div>

                            

                            

                        </div>

                    <div className="zamakast-hero-image">
                        <HeroImage poster={beahero}  />
                        
                    
                    </div>
                    </div>

                    <div className="highpower-one-mobile-section-container">
                              
                               
                                
                                
                    <div className="ditec-ha9-section-flex">
                                                <div>
                                                    <h5 className="cabinet-locks-header">BEA's MS41</h5>
                                                    <p className="highpower-paragraph-text">
                                                    Using microwave technology, BEA’s MS41 produces a detection field with a reliable and consistent transmission in interior and exterior applications. 
                                                    Capable of detecting a moving hand, cart or wheelchair. 
                                                    Plus, an adjustable hold time offers flexibility to meet ANSI standards.</p>
                                               
                                                    <div className="google-apple-flexcontainer">

                                                    <div className="button-flexed-highpower">

                                                        <button    
                                                        onClick={this.togglePop}
                                                            className="Schedule-webinar-button3">Schedule Webinar</button>
                                                            {this.state.seen ? <Schedule toggle={this.togglePop} /> : null}

                                                        {/* <button className="download-manual-button3">Download Manual</button> */}

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
                                    <p className="lockers-text-paragraph">Wave to open products are useful to allow for additional accessibility for banks or similar establishments.</p>
                                    

                                    
                                    <img className="churches-image" src={churches} alt="Zamakast's alfa lock" />
                                    <h5 className="furniture-header-text">Churches</h5>
                                    <p className="furniture-text-paragraph">Wave to open products are useful to allow for additional accessibility for churches or similar establishments.</p>

                                    <img className="daycares-image" src={daycares} alt="Zamakast's alfa lock" />
                                    <h5 className="storage-header-text">Daycares</h5>
                                    <p className="storage-text-paragraph">Wave to open products are useful to allow for additional accessibility for daycares or similar establishments.</p>
                                    
                                </div>
                        
                        
                        </div>
                        
                
                </div>



                <div className="highpower-breakdown-container-section">

                                <img className="BEA-style" src={HA7Long} alt="Highpower One and Mobile App" />
                                
                                <img className="hp-security-icon1" src={securityicon} alt="Highpower One and Mobile App" />

                                    <h3 className="hp-secure-header-text">Sanitary</h3>

                                    <p className="hp-secure-text-paragraph">Wave to open products are proven to keep the contact of surfaces down for overall sanitary purposes. </p>

                                     <img className="hp-security-icon2" src={securityicon} alt="Highpower One and Mobile App" />

                                     <h3 className="hp-EasyInstallation-header-text">Accessbile</h3>

                                     <p className="hp-easyinstallation-text-paragraph">Wave to open products improve the accessiblity of a building by allowing easy use to open a door. </p>

                                     <img className="hp-security-icon3" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Adaptable-header-text">Adaptable</h3>

                                     <p className="hp-adaptable-text-paragraph">The Access Direct team will work with you to figure out the best solution for installation on your building.</p>

                                     <img className="hp-security-icon4" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Easyuse-header-text">Easy Use</h3>

                                     <p className="hp-Easyuse-text-paragraph">Once installed, the BEA products are guaranteed to work smoothly, and function as expected. </p>

                            
                            
                            
                            </div>

                       

                           
                       
                   
                        
                        <div className="highpower-one-spacing">
                        <OtherProducts />
                        </div>
                            

                           
                            
                       <Footer />

            </div>
        );
    }
}

export default beaPage;