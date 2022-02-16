import React, {Component} from 'react';
import './pneu.styles.scss';

import heroimage2 from './Pneumatics.png';
import banks from './Banks.png';
import churches from './Churches.png';
import daycares from './daycares.png';
import securityicon from './Security-icon.svg';
import pneumaticstwo from './PneumaticsGroup.png';
import pneumaticsthree from './Pneumaticsthree.png';
import pneumaticsfour from './Pneumaticsfour.png';
import pneumaticsfive from './Pneumaticsfive.png';

import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
import Footer from '../../Components/Footer/Footer.component';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';
import { HeroImage } from '../../Components/Hero Image Component/herocomponent';
import Formats from '../../Components/See Formats Popup/Formats';
import { Link } from 'react-router-dom';




class pneumaticsPage extends Component {
    state= {
        seen: false
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
    toggleSchedule = () => {
        this.setState({
            seen: !this.state.seen
        });
    };
    render() {
        
        
        return (
             /* Pneumatics page taken from the highpower page. Should be refactored. Either make the Highpower page a reusable component, or create separate styles  */
            <div className="highpower-page">

                    <div className="highpower-hero-flex-container">
                    <div className="header-paragraph-container">
                            <h1 className="highpower-header">
                              Pneumatic Switches
                            </h1>

                            <p className="paragraph-text-highpower">
                            Learn about our array of Handicap Operators and Pneumatic switches. 
                            Access Direct has a team of installers that can help you implement automatic doors for easy access to your building. 
                            We offer an array of different model switches and buttons.
                            </p>
                            <div className="button-flexed-highpower">

                            

                            <button 
                            onClick={this.toggleSchedule}
                            className="Schedule-webinar-button-highpower">Schedule Webinar</button>
                            {this.state.seen ? <Schedule toggle={this.toggleSchedule} /> : null}


                            <Link style={{textDecoration:'none'}} to="./highpower-products" >
                            <button className="download-manual-button-highpower">See All Products</button>
                            </Link>



                            </div>

                            

                        </div>

                    <div className="zamakast-hero-image">
                    <HeroImage poster={heroimage2}  />
                        
                    
                    </div>
                    </div>

                    <div className="highpower-one-mobile-section-container">
                              
                               
                                
                                
                    <div className="cellphone-section-flex">
                                                <div>
                                                    <h5 className="cabinet-locks-header">H100 & H110 Series</h5>
                                                    <p className="highpower-paragraph-text">
                                                    H-100 Single-gang box mountable egress door control H-100 PNZ Single-gang box mountable egress release with pneumatic timer.
                                            
                                                        H-110 Narrow mullion mounted egress door control.

                                                        H-110 PNZ Narrow mullion mounted egress release with pneumatic timer.
                                                    </p>

                                                    <div className="button-flexed-pneu">

                                                        <button 
                                                         onClick={this.toggleSchedule}
                                                        className="Schedule-webinar-button3">Schedule Webinar</button>

                                                        <Link style={{textDecoration:'none'}}  to="./highpower-products" >
                                                        <button className="download-manual-button3">See all products</button>
                                                        </Link>

                                                    </div>
                                                
                                                   
                                                </div>

                                                <div>
                                                <img className="HA9-styles" src={pneumaticstwo} alt="zamakast's alfa lock" />
                                                </div>

                        </div>

      
                        <div className="highpower-blue-shape-container">
                        
                            <h4 className="cabinet-locks-use-cases-header">Use Cases</h4>

                                <div className="use-cases-flex-container">

                                
                                    <img className="banks-image" src={banks} alt="Zamakast's alfa lock" />
                                    <h5 className="lockers-header-text">Banks</h5>
                                    <p className="lockers-text-paragraph">Pneumatic switches are useful to control all access points in a bank.</p>
                                    

                                    
                                    <img className="churches-image" src={churches} alt="Zamakast's alfa lock" />
                                    <h5 className="furniture-header-text">Churches</h5>
                                    <p className="furniture-text-paragraph">Pneumatic switches are useful to control all access points in a church.</p>

                                    <img className="daycares-image" src={daycares} alt="Zamakast's alfa lock" />
                                    <h5 className="storage-header-text">Daycares</h5>
                                    <p className="storage-text-paragraph">Pneumatic switches are useful to control all access points in a daycare.</p>
                                    
                                </div>
                        
                        
                        </div>
                        
                
                </div>



                <div className="pneu-breakdown-container-section">

                                <img className="pneu-mobile-image-breakdown" src={pneumaticsthree} alt="Highpower One and Mobile App" />
                                
                                <img className="hp-security-icon1" src={securityicon} alt="Highpower One and Mobile App" />

                                    <h3 className="hp-secure-header-text">Secure</h3>

                                    <p className="hp-secure-text-paragraph">

                                        All pneumatic push plate products are listed UL294 & UI508 / CSA C22.2 No14.10 with MET LABS, File # E113051.</p>

                                     <img className="hp-security-icon2" src={securityicon} alt="Highpower One and Mobile App" />

                                     <h3 className="hp-EasyInstallation-header-text">Easy Installation</h3>

                                     <p className="hp-easyinstallation-text-paragraph"> 
                                     All styles can also be furnished with standard micro-switches.
                                      </p>

                                     <img className="hp-security-icon3" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Adaptable-header-text">Adaptable</h3>

                                     <p className="hp-adaptable-text-paragraph">Like many of our products we have custom engraving available. </p>

                                     <img className="hp-security-icon4" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Easyuse-header-text">Easy Use</h3>

                                     <p className="hp-Easyuse-text-paragraph">Limited plate travel against the back plate ensures durability in these units. </p>

                            
                            
                            
                            </div>




                            {/* Section taken from Highpower one mobile section with a inline style to set the bg to blue  */}
                            <div className="highpower-one-mobile-section-container">
                              
                              <div style={{marginTop: '5vh',backgroundColor: '#1F56BA'}} className="ditec-ha9-section-flex">
                                                          <div>
                                                              <h5 style={{color: 'white'}} className="cabinet-locks-header">H120 & H130 Series</h5>
                                                              <p  style={{color: 'white'}}className="highpower-paragraph-text">
                                                              H-120 Single-gang box mountable egress door control.
                                                              H-120 PNZ Single-gang box mountable egress release with pneumatic timer. 
                                                                H-130 Narrow mullion mounted egress door control. 
                                                                H-130 PNZ Narrow mullion mounted egress release with pneumatic timer. 
                                                                </p>

                                                         
                                                              <div className="google-apple-flexcontainer">
          
                                                              <div className="button-flexed-highpower">
          
                                                                  <button    
                                                                  onClick={this.toggleSchedule}
                                                                      className="Schedule-webinar-button3">Schedule Webinar</button>
                                                                      {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null}
          
                                                                      <Link style={{textDecoration:'none'}} to="./highpower-products" >
                                                                     <button 
                                                    
                                                        className="download-manual-button3">See all products</button> 
                                                        </Link>
                                                      
          
                                                              </div>
          
                                                              </div>
                                                             
                                                          </div>
          
                                                          <img style={{width: '25vw'}} className="HA9-styles" src={pneumaticsfour} alt="H120 & H130 Pneumatic switches" />
                                                          </div>
          
                                  </div>

                                   {/* Section taken from Highpower one mobile section to add another Pneumatics section  */}

                                  <div className="highpower-one-mobile-section-container">
                              
                              <div className="ditec-ha9-section-flex">
                                                          <div>
                                                              <h5  className="cabinet-locks-header">H140 & H150 Series</h5>
                                                              <p  className="highpower-paragraph-text">
                                                              H-140 Single-gang box mountable egress door control H-140 PNZ Single-gang box mountable egress release with pneumatic timer 
                                                              H-150 Narrow mullion mounted egress door control H-150 PNZ Narrow mullion mounted egress release with pneumatic timer
                                                              </p>
                                                         
                                                              <div className="google-apple-flexcontainer">
          
                                                              <div className="button-flexed-highpower">
          
                                                                  <button    
                                                                  onClick={this.toggleSchedule}
                                                                      className="Schedule-webinar-button3">Schedule Webinar</button>
                                                                      {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null}
          
                                                                      <Link style={{textDecoration:'none'}} to="./highpower-products" >
                                                                       <button 
                                                      
                                                        className="download-manual-button3">See All Pneumatics</button> 
                                                        </Link>
                                                        
          
                                                              </div>
          
                                                              </div>
                                                             
                                                          </div>
          
                                                          <img style={{width: '18vw'}} className="HA9-styles" src={pneumaticsfive} alt="zamakast's alfa lock" />
                                                          </div>
          
                                  </div>


                           
                       
                   
                        
                        <div className="highpower-one-spacing">
                        <OtherProducts />
                        </div>
                            

                           
                            
                       <Footer />

            </div>
        );
    }
}

export default pneumaticsPage;