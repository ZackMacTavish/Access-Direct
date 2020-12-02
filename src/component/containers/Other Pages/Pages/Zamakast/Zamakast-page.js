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

import Header from "../../../../base/Header";

class zamakastPage extends Component {
    render() {
        return (
            <div className="zamakast-page">
                <Header/>
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

                            
                            
                            
                            </div>

                       

            </div>
        );
    }
}

export default zamakastPage;