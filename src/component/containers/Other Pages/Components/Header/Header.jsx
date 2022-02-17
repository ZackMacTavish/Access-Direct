import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../../../../../scss/base/header.scss';
import hamburger from './Hamburger.svg';
import './ResponsiveMenu.styles.scss';
import Popup from '../ToggleMenu/Togglemenu';
import { Link } from 'react-router-dom';
import { AD_CONTACT, AD_NEWS, AD_RECORD } from '../../../../../const/links';

const Headertwo = () =>  {

    /*useState Hook that intitializes the state, and variable for toggling the menu popup  */

    const [seen, setSeen] = useState(false);

      /*function that toggles the state */

    const togglePop = () => {
        setSeen(!seen)
        };
    

    /*useState Hook that crates the state, and variable for innerWidth  */
 
   const [isDesktop, setDesktop] = useState(window.innerWidth > 550);
 
    /*function that alters the state for innerWidth  */
   const updateMedia = () => {
     setDesktop(window.innerWidth > 550);
   };
 
   /*useEffect hook that has two functions. One to redirect to the top of the page, and one to check for resizing responsivness  */
   useEffect(() => {
     window.addEventListener("resize", updateMedia);
     return () => window.removeEventListener("resize", updateMedia);
   }, [])

   return (  

    <div> 
      {/* Ternary operator that checks for isDesktop hook and renders hamburger.svg for mobile */}
      {isDesktop ? 
      
      <div className="header-wrapper">
                <div className="header">
                    <div className="header-logo">
                        <Link to="/">
                        <img className="logo-home" src="/img/logo.jpg" alt="Logo"/>
                        </Link>
                    </div>
                    <div className="header-nav">
                        <ul className="first-ul">
                            <li><Link to="./">HOME</Link></li>
                            <li><Link to='./company'>COMPANY</Link></li>
                            <li><Link to='./manufacturer'>MANUFACTURERS</Link>
                                <ul className="our-products-dropdown">
                                <li><Link to="./products">All Products</Link></li>
                                <li><Link to='./Highpower'>Highpower</Link></li>
                                <li><Link to='./pneumatics'>Pneumatic Switches</Link></li>
                                <li><Link to='./fobs'>Fobs/Cards</Link></li>
                                <li><a href={AD_RECORD}>Record Usa</a></li>
                                <li><Link to='./Zamakast'>Zamakast</Link></li>
                                <li><Link to='./Ditec'>Ditec</Link></li>
                                <li><Link to="./lifesavers">Lifesavers</Link></li>
                                <li><Link to="./bea">BEA</Link></li>
                                </ul>                            
                            </li>
                            <li><a href={AD_NEWS}>NEWS</a></li>
                            <li><a href="/terms">DICTIONARY</a></li>
                            <li><a href={AD_CONTACT}>CONTACT</a></li>
                        </ul>

                         
                    </div>
                </div>
            </div>
    :  
      
      <div className="header-wrapper">
      <div className="header">
          <Link to="/">
          <div className="header-logo">
              <img src="/img/logo.jpg" alt="Logo"/>
          </div>
          </Link>
          <div className="header-nav">
              
             <img 
             onClick={togglePop}
             className="hamburger-menu"src={hamburger} alt="Navigation Menu" />
             {seen ? <Popup toggle={togglePop} /> : null}

               
          </div>
      </div>
  </div>
      
      
      
      
      }

      </div>


   )};

   export default Headertwo;