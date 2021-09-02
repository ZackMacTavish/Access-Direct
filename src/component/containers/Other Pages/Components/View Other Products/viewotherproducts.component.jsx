import React, {Component} from 'react';

import './viewotherproducts.styles.scss';

import pneumaticsicon from './Pneumatics.svg';
import Highpoweroneicon from './HighpowerOne.png';
import customfob from './CustomFob.svg';

import {Link} from 'react-router-dom';


class OtherProducts extends Component {
    render() {
        return (

            <div className="otherproducts-container-component">
            
            
            <h2 className="otherproducts-header-text">View our other products.</h2>

            <img className="pneumatic-icon-otherproducts" src={pneumaticsicon} alt="Pneumatic Switches Graphic" />

            <h3 className="pneumatic-switches-header-text">Pneumatic Switches</h3>

            <p className="pneumatic-switches-otherproducts-p-text">Our door hardware experts match the perfect set of 
            pneumatic switches for your needs. We carry a selection from many brands.</p>

           

            <a className="pneumatic-switches-page" href="/oops">Pneumatic Switches</a>

            <img className="highpower-icon-otherproducts" src={Highpoweroneicon} alt="Highpower Graphic" />

            <img className="customfob-icon-otherproducts" src={customfob} alt="Highpower Graphic" />

            <h3 className="highpower-one-header-text">Highpower One</h3>


            <p className="highpowerone-otherproducts-p-text">The Highpower One eight door controller is available in 
            a mobile application. 
            Allowing you to control the doors from you phone. 
            </p>

           

            <a className="highpowerone-page" href="/highpower">Highpower One</a>

            <h3 className="custom-fobgenerator-header-text">Custom Fob Generator</h3>

            <p className="custom-fobgenerator-otherproducts-p-text">Download your logo to our generator and we will 
            print it directly onto fobs or prox cards. 
            First time users of the fob layout designer get 30 free fobs added to their order.
            </p>

           <a 
           className="custom-fobgenerator-page"
           href={'/fob'}>
            <button className="custom-fobgenerator-page">Custom Fob Generator</button>
            </a>

       

            
            
            </div>




        )

    }}


export default OtherProducts;

