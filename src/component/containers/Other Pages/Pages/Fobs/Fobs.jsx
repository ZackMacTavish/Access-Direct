import React, {Component} from 'react';
import '../BEA/BEA.styles.scss'
import '../Highpower One/highpower.styles.scss';
import beahero from './Group 388.png';
import hanine from '../Fobs/Group 379.png';
import banks from '../Highpower One/Banks.png';
import churches from '../Highpower One/Churches.png';
import daycares from '../Highpower One/daycares.png';
import clamshell from '../Fobs/C&M.png';
import prox from '../Fobs/HighpowerCard1 1.png';
import wafer from '../Fobs/WaferTag 1.png';

import securityicon from '../Highpower One/Security-icon.svg';
import HA7Long from '../Fobs/Grayson2 1.png';
import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
import Footer from '../../Components/Footer/Footer.component';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';
import { HeroImage } from '../../Components/Hero Image Component/herocomponent';
import { Link } from 'react-router-dom';
import Formats from '../../Components/See Formats Popup/Formats';




class fobsPage extends Component {
    state= {
        schedule: false,
        formats: false
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    
    toggleSchedule = () => {
        this.setState({
            schedule: !this.state.schedule
        });
    };

    toggleFormats = () => {
        this.setState({
            formats: !this.state.formats
        });
    };
    render() {
        
        
        return (
            <div className="highpower-page">

                    <div className="highpower-hero-flex-container">
                    <div className="header-paragraph-container">
                            <h1 className="highpower-header">
                               Fobs & Keycards
                            </h1>

                            <p className="paragraph-text-highpower">
                            Access Direct can deliver fobs and keycards customized to your companies specifications. 
                            Including the ability to add your companies logo to the access card. The touch-free system allows a clean transaction through the door. 

​​                             </p>
                            <div className="button-flexed-highpower">

                            <button 
                                 onClick={this.toggleSchedule}
                                className="Schedule-webinar-button3">Schedule Webinar</button>
                                {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null}

                                 { <button 
                                 onClick={this.toggleFormats}
                                 className="download-manual-button3">See Formats</button> }
                                 {this.state.formats ? <Formats toggle={this.toggleFormats} /> : null}
                            
                            </div>

                            

                            

                        </div>

                    <div className="zamakast-hero-image">
                        <HeroImage poster={beahero}  />
                        
                    
                    </div>
                    </div>

                    <div className="highpower-one-mobile-section-container">
                              
                    <div className="ditec-ha9-section-flex">
                                                <div>
                                                    <h5 className="cabinet-locks-header">Custom Programming, and logos</h5>
                                                    <p className="highpower-paragraph-text">
                                                    A key fob is a small, programmable hardware device that provides access control to a physical object by placing it near a reader. 
                                                    Our key fobs are fully customizable with your logo and other specific information you request (i.e. website, telephone number, etc.) 
                                                    and come in three colors: black, grey and red. All of our key fobs have a slot at the top that you can easily put on your key ring or lanyard. 
                                                    Please click here for a list of available formats.</p>
                                               
                                                    <div className="google-apple-flexcontainer">

                                                    <div className="button-flexed-highpower">

                                                        <button    
                                                        onClick={this.toggleSchedule}
                                                            className="Schedule-webinar-button3">Schedule Webinar</button>
                                                            {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null}

                                                        { <button 
                                                        onClick={this.toggleFormats}
                                                        className="download-manual-button3">See Formats</button> }
                                                        {this.state.formats ? <Formats toggle={this.toggleFormats} /> : null}

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
                                    <p className="lockers-text-paragraph">Fobs are useful to allow for employee access for banks or similar establishments.</p>
                                    

                                    
                                    <img className="churches-image" src={churches} alt="Zamakast's alfa lock" />
                                    <h5 className="furniture-header-text">Churches</h5>
                                    <p className="furniture-text-paragraph">Fobs are useful to allow for access to churches or similar establishments.</p>

                                    <img className="daycares-image" src={daycares} alt="Zamakast's alfa lock" />
                                    <h5 className="storage-header-text">Daycares</h5>
                                    <p className="storage-text-paragraph">Fobs are useful to allow for access to daycares or similar establishments.</p>
                                    
                                </div>
                        
                        
                        </div>
                        
                
                </div>



                <div className="highpower-breakdown-container-section">

                                <img className="BEA-style" src={HA7Long} alt="Highpower One and Mobile App" />
                                
                                <img className="hp-security-icon1" src={securityicon} alt="Highpower One and Mobile App" />

                                    <h3 className="hp-secure-header-text">Logo</h3>

                                    <p className="hp-secure-text-paragraph">We have the ability to place your company's custom logo on our fobs.</p>

                                     <img className="hp-security-icon2" src={securityicon} alt="Highpower One and Mobile App" />

                                     <h3 className="hp-EasyInstallation-header-text">Easy Use</h3>

                                     <p className="hp-easyinstallation-text-paragraph">Using the fob to access your company is as easy as swiping your hand.</p>

                                     <img className="hp-security-icon3" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Adaptable-header-text">Adaptable</h3>

                                     <p className="hp-adaptable-text-paragraph">The Access Direct team will work with you to figure out the best solution for installation for your company.</p>

                                     <img className="hp-security-icon4" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="hp-Easyuse-header-text">Mockups</h3>

                                     <p className="hp-Easyuse-text-paragraph">You can use our fob mockup generator link below to test your company logo on a fob. <Link style={{color:"blue"}} to='./fob'>Here</Link> </p>

                            
                            
                            
                            </div>


                            <div className="highpower-one-mobile-section-container">
                              
                              <div style={{marginTop: '5vh',backgroundColor: '#1F56BA'}} className="ditec-ha9-section-flex">
                                                          <div>
                                                              <h5 style={{color: 'white'}} className="cabinet-locks-header">Clamshell Cards</h5>
                                                              <p  style={{color: 'white'}}className="highpower-paragraph-text">
                                                              A clamshell card is the same size and shape as the proximity cards; however, 
                                                              they are thicker than proximity cards. Clamshell cards come
pre-punched with a hole on the top vertical end of the card and are only available in white. They can either be etched with your logo or printed. </p>
                                                         
                                                              <div className="google-apple-flexcontainer">
          
                                                              <div className="button-flexed-highpower">
          
                                                                  <button    
                                                                  onClick={this.toggleSchedule}
                                                                      className="Schedule-webinar-button3">Schedule Webinar</button>
                                                                      {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null}
          
                                                        
                                                                      { <button 
                                                        onClick={this.toggleFormats}
                                                        className="download-manual-button3">See Formats</button> }
                                                        {this.state.formats ? <Formats toggle={this.toggleFormats} /> : null}
          
                                                              </div>
          
                                                              </div>
                                                             
                                                          </div>
          
                                                          <img className="HA9-styles" src={clamshell} alt="zamakast's alfa lock" />
                                                          </div>
          
                                  </div>


                                  <div className="highpower-one-mobile-section-container">
                              
                              <div className="ditec-ha9-section-flex">
                                                          <div>
                                                              <h5 className="cabinet-locks-header">Proximity Cards</h5>
                                                              <p  className="highpower-paragraph-text">
                                                              A proximity card is the size and shape of a credit card. These cards come with slot punch options on both the vertical end and horizontal end of the card, 
                                                              which lets you decide on what end, if any, you would like the hold for a key ring or lanyard. 
                                                              Please note that these proximity cards do not come pre-punched and are only available in white. </p>
                                                         
                                                              <div className="google-apple-flexcontainer">
          
                                                              <div className="button-flexed-highpower">
          
                                                                  <button    
                                                                  onClick={this.toggleSchedule}
                                                                      className="Schedule-webinar-button3">Schedule Webinar</button>
                                                                      {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null}


                                                                      { <button 
                                                        onClick={this.toggleFormats}
                                                        className="download-manual-button3">See Formats</button> }
                                                        {this.state.formats ? <Formats toggle={this.toggleFormats} /> : null}
          
          
                                                              </div>
          
                                                              </div>
                                                             
                                                          </div>
          
                                                          <img className="HA9-styles" src={prox} alt="zamakast's alfa lock" />
                                                          </div>
          
                                  </div>



                                  <div className="highpower-one-mobile-section-container">
                              
                              <div style={{marginTop: '5vh',backgroundColor: '#1F56BA'}} className="ditec-ha9-section-flex">
                                                          <div>
                                                              <h5 style={{color: 'white'}} className="cabinet-locks-header">Wafer Tags</h5>
                                                              <p  style={{color: 'white'}}className="highpower-paragraph-text">
                                                              A wafer tag is a round sticker that can be placed on any hard, solid surface, such as the back of a cell phone. 
                                                              You can then hold this device up to the card reader for access. 
                                                              Wafer tags come in white and can easily hold your logo on the top of the sticker.  </p>
                                                         
                                                              <div className="google-apple-flexcontainer">
          
                                                              <div className="button-flexed-highpower">
          
                                                                  <button    
                                                                  onClick={this.toggleSchedule}
                                                                      className="Schedule-webinar-button3">Schedule Webinar</button>
                                                                      {this.state.schedule ? <Schedule toggle={this.toggleSchedule} /> : null}
          
                                                              
                                                        { <button 
                                                        onClick={this.toggleFormats}
                                                        className="download-manual-button3">See Formats</button> }
                                                        {this.state.formats ? <Formats toggle={this.toggleFormats} /> : null}
          
                                                              </div>
          
                                                              </div>
                                                             
                                                          </div>
          
                                                          <img style={{width:'30vw'}}className="HA9-styles" src={wafer} alt="zamakast's alfa lock" />
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

export default fobsPage;