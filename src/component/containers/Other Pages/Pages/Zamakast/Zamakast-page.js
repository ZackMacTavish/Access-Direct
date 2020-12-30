import React, {Component} from 'react';
import './zamakastpage.scss'

import '../../../../../scss/containers/App.scss';

import heroimage1 from './Group 195.png';
import cabinet1 from './Cabinet1.png';
import cabinet2 from './Cabinet2.png';
import blueshape from './BlueShape.svg';
import lockers from './Lockers.png';
import furniture from './Furniture.png';
import storage from './Storage.png';
import alfavertical from './AlfaLock-Vertical.png';
import alfahorizontal from './AlfaLock-Horizontal.png';
import securityicon from './Security-icon.svg';

import Header from "../../../../base/Header";
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component';
import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
import Footer from '../../Components/Footer/Footer.component';





class zamakastPage extends Component {
    render() {
        
        
        return (
            <div className="zamakast-page">
                {window.innerWidth > 800 ? <Header/> : <ResponsiveHeader /> }
               
                        <div className="zamakast-hero-flex-container">
                            <div className="header-paragraph-container">
                                    <h1 className="zamakast-header">
                                        Zamakast's Alfa Lock
                                    </h1>

                                    <p className="paragraph-text-zamakast">
                                    Learn about Zamakast's Electronic locks and security. 
                                    Access Direct carries Zamakast's electronic locks that are 
                                    available in vertical or horizontal installations and 90° or 
                                    180° locking movements. These locks are ideal for office furniture, 
                                    fitness club locker rooms, or workplace.
                                    </p>

                                    

                                </div>

                            <div className="zamakast-hero-image">
                                <img className="image-2-alfalock" src={heroimage1} alt="zamakast's alfa lock" />
                                
                            
                            </div>

                           

                        </div>

                               
                                <div className="cabinet-locks-section-container">
                              
                                    <h5 className="cabinet-locks-header">Cabinet Locks</h5>
                                    <p className="zamakast-paragraph-text">Zamakast's locks can be used on a variety of furniture 
                                    including cabinets.
                                    See below for various use cases on Zamakast's product. Placeholder text to see if this looks better.</p>

                                   
                                    <img className="image-3-cabinet2" src={cabinet2} alt="zamakast's alfa lock" />

                                        
                                    <div className="blue-shape-container">
                                    
                                        <h4 className="cabinet-locks-use-cases-header">Use Cases</h4>

                                            <div className="use-cases-flex-container">

                                               
                                                <img className="lockers-image" src={lockers} alt="Zamakast's alfa lock" />
                                                <h5 className="lockers-header-text">Lockers</h5>
                                                <p className="lockers-text-paragraph">The Alfa lock is useful on lockers, and is easy to install. Helping
                                                keep all of your items secure inside.</p>
                                                

                                                
                                                <img className="furniture-image" src={furniture} alt="Zamakast's alfa lock" />
                                                <h5 className="furniture-header-text">Furniture</h5>
                                                <p className="furniture-text-paragraph">The Alfa lock is useful on furniture, and is easy to install. This use case can be
                                                used as a safe protocol from children.</p>

                                                <img className="storage-image" src={storage} alt="Zamakast's alfa lock" />
                                                <h5 className="storage-header-text">Storage Cabinets</h5>
                                                <p className="storage-text-paragraph">The Alfa lock is a dynamic asset that can be installed on storage cabinets. Ask our 
                                                team for more information on use cases.</p>
                                                
                                            </div>
                                    
                                    
                                    </div>
                                        
                                
                                </div>


                            <div className="Alfa-lock-vertical-breakdown-container-section">

                                <img className="alfa-vertical-lock-breakdown" src={alfavertical} alt="Zamakast's alfa lock" />
                                
                                <img className="security-icon1" src={securityicon} alt="Zamakast's alfa lock" />

                                    <h3 className="secure-header-text">Secure</h3>

                                    <p className="secure-text-paragraph">Built in interface and integrated touchscreen which makes
                                     it ready to use as soon as plugged in. Log of entries and audit </p>

                                     <img className="security-icon2" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="EasyInstallation-header-text">Easy Installation</h3>

                                     <p className="easyinstallation-text-paragraph">The Alfa lock is easily installed on metal or wood by just screwing 
                                     it in. Lorem Ipsum Doler imight alfa lock for everyone. </p>

                                     <img className="security-icon3" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="Adaptable-header-text">Adaptable</h3>

                                     <p className="adaptable-text-paragraph">The Alfa lock is easily installed on metal or wood by just screwing 
                                     it in. Lorem Ipsum Doler imight alfa lock for everyone. </p>

                                     <img className="security-icon4" src={securityicon} alt="Zamakast's alfa lock" />

                                     <h3 className="Easyuse-header-text">Easy Use</h3>

                                     <p className="Easyuse-text-paragraph">The Alfa lock is easily installed on metal or wood by just screwing 
                                     it in. Lorem Ipsum Doler imight alfa lock for everyone. </p>

                            
                            
                            
                            </div>


                            <div className="Alfalock-horizontal-vertical-container">



                                                <div className="grid-text-container">
                                                    <div className="horizontal-vertical-text-container-flex">
                                                        <h3 className="horizontal-vertical-header-text">Available as a Vertical<br/> & Horizontal lock.</h3>
                                                        
                                                        <p className="horizontal-vertical-paragraph-text">Depending on the specific use case. Alfa’s Zamakast lock is available for vertical and horizonal installation. 
                                                        Locks for your office furniture, storage cabinets, and lockers. 
                                                        Learn about Zamakast's Electronic locks and security. Access Direct carries this lock and is ready to ship worldwide.</p>

                                                    </div>

                                            </div>

                                            
                                            <img className="alfa-vertical-lock-vertical-horizontal-section" src={alfavertical} alt="Zamakast's alfa lock" />

                                            <img className="alfa-horizontal-lock-vertical-horizontal-section" src={alfahorizontal} alt="Zamakast's alfa lock" />
                            </div>


                            <OtherProducts />


                            <Footer />
                            
                           
                            
                       

            </div>
        );
    }
}

export default zamakastPage;