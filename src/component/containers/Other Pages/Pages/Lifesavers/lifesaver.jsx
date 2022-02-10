import React, {Component} from 'react';

import '../Lifesavers/lifesavers.styles.scss'
import '../Highpower One/highpower.styles.scss';
import lifesaverhero from './Lifesavers.png';
import pushpull from '../Lifesavers/push-pull.png';
import banks from '../Highpower One/Banks.png';
import churches from '../Highpower One/Churches.png';
import daycares from '../Highpower One/daycares.png';

import dlig from '../Lifesavers/d-lig-image.png';

import Header from "../../../../base/Header";
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component';
import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
import Footer from '../../Components/Footer/Footer.component';
import Schedule from '../../Components/Schedule Webinar Popup/Schedule';
import { HeroImage } from '../../Components/Hero Image Component/herocomponent';




class lifesaversPage extends Component {
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
                               Lifesaver Series
                            </h1>

                            <p className="paragraph-text-highpower">
                            Marks USA has developed LifeSaver™ ANSI Grade 1 institutional life safety locksets to address managed liability, accident prevention, 
                            life safety and security in Behavioral Health Care Institutions, X-ray settings and correctional facilities. 
                            LifeSaver offers the most variations; unprecedented cylindrical, mortise styles, models & functions available, 
                            including electrified units, ideal for buzz-in and man-trap applications, plus antimicrobial finishes. With easy installation, 
                            they retrofit all popular preps and door constructions. 
                            All LifeSaver series locks are stainless steel and come with the Marks USA Lifetime Mechanical Warranty.

​​                             </p>
                            <div className="button-flexed-lifesaver">

                            <button 
                                 onClick={this.togglePop}
                                className="Schedule-webinar-button-ditec">Schedule Webinar</button>
                                {this.state.seen ? <Schedule toggle={this.togglePop} /> : null}

                                <a style={{textDecoration:'none'}} href="https://marksusa.com/media/pdfs/A711A-LifeSaver-D-Lig-LR.pdf" target="_blank" rel="noopener noreferrer" className="download-manual-button-lifesavers">Download Manual</a>
                            
                            </div>

                            

                            

                        </div>

                    <div className="zamakast-hero-image">
                    <HeroImage poster={lifesaverhero}  />
                        
                    
                    </div>
                    </div>

                    <div className="highpower-one-mobile-section-container">
                              
                               
                                
                                
                    <div className="ditec-ha9-section-flex">
                                                <div>
                                                    <h5 className="cabinet-locks-header">Cylindrical & Mortise Push/Pull Paddlesets</h5>
                                                    <p className="highpower-paragraph-text">
                                                    Our unique cylindrical and mortise hospital push/pull paddlesets feature universal assemblies where you can choose to install handles to 
                                                    point two-up, two-down or one-up and one-down. No handing needed. Marks USA design innovation also produced an improved short angle design 
                                                    meaning easier hands-free push/pull for the user. Great retrofit, 
                                                    superior for new construction!</p>
                                               
                                                    <div className="google-apple-flexcontainer">

                                                    <div className="button-flexed-lifesaver">

                                                        <button className="Schedule-webinar-button-ditec">Schedule Webinar</button>

                                                        <a style={{textDecoration:'none'}} href="https://marksusa.com/media/pdfs/A711A-LifeSaver-D-Lig-LR.pdf" target="_blank" rel="noopener noreferrer" className="download-manual-button-lifesavers">Download Manual</a>

                                                    </div>

                                                    </div>
                                                   
                                                </div>

                                            

                             
                                    

                                                <div>
                                                <img className="HA9-styles" src={pushpull} alt="zamakast's alfa lock" />
                                                </div>

                        </div>

                        

                            
                        <div className="highpower-blue-shape-container">
                        
                            <h4 className="cabinet-locks-use-cases-header">Use Cases</h4>

                                <div className="use-cases-flex-container">

                                
                                    <img className="banks-image" src={banks} alt="Zamakast's alfa lock" />
                                    <h5 className="lockers-header-text">Banks</h5>
                                    <p className="lockers-text-paragraph">Marks USA products are useful to control all doors in a bank.</p>
                                    

                                    
                                    <img className="churches-image" src={churches} alt="Zamakast's alfa lock" />
                                    <h5 className="furniture-header-text">Churches</h5>
                                    <p className="furniture-text-paragraph">Marks USAproducts are useful to control all doors in a church.</p>

                                    <img className="daycares-image" src={daycares} alt="Zamakast's alfa lock" />
                                    <h5 className="storage-header-text">Daycares</h5>
                                    <p className="storage-text-paragraph">Marks USA products are useful to control all doors in a Daycare.</p>
                                    
                                </div>
                        
                        
                        </div>


                        <div className="ditec-ha9-section-flex">
                                                <div>
                                                    <h5 className="cabinet-locks-header">D-Lig Slide Behavioral Health Locksets</h5>
                                                    <p className="highpower-paragraph-text">
                                                    Ergonomic Stainless Steel 5-Point Ligature-Resistant Slide – Solid cast slide handle moves down freely in locked or unlocked position, tamper-proof through-bolted for durability & easy-installation; antimicrobial finish option
                                                    Compliances: Latest BHMA 156.34 Anti-Ligature trim standard & JHACO approved
                                                    Saves Budgets- Typically 40% less cost than competitive products, while exceeding durability standards by as much as 400%
                                                    GermAway™ anti-microbial finish available: Built-in germ barrier & special antimicrobial finish that inhibits microbial growth of dangerous microorganisms, mold, mildew and fungi
                                                    Ideal for Retrofit or New Construction– Easy, neat aesthetic installation for all popular preps and door constructions</p>
                                               
                                                    <div className="google-apple-flexcontainer">

                                                    <div className="button-flexed-lifesaver">

                                                        <button className="Schedule-webinar-button-ditec">Schedule Webinar</button>

                                                        <a style={{textDecoration:'none'}} href="https://marksusa.com/media/pdfs/A711A-LifeSaver-D-Lig-LR.pdf" target="_blank" rel="noopener noreferrer" className="download-manual-button-lifesavers">Download Manual</a>

                                                    </div>

                                                    </div>
                                                   
                                                </div>

                                            

                             
                                    

                                                <div>
                                                <img className="dlig-styles" src={dlig} alt="zamakast's alfa lock" />
                                                </div>

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

export default lifesaversPage;