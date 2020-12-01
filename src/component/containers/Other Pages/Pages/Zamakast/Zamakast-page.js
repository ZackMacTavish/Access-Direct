import React, {Component} from 'react';
import './zamakastpage.scss'

import '../../../../../scss/containers/App.scss';

import heroimage1 from './Group 195.png';



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
                    
            </div>
        );
    }
}

export default zamakastPage;