import React from 'react';
import '../../scss/header.scss';

class Header extends React.Component {

    render() {
        return (
           <div className="header-wrapper">
               <div className="header">
                   <div className="header-logo">
                       <img src="/img/logo-ad.png" alt="Logo"/>
                   </div>
                   <div className="header-nav">
                       <ul>
                           <li><a href="#">HOME</a></li>
                           <li><a href="#">COMPANY</a></li>
                           <li><a href="#">OUR PRODUCT</a></li>
                           <li><a href="#">TERMS</a></li>
                           <li><a href="#">CONTACT</a></li>
                       </ul>
                   </div>
               </div>
           </div>
        );
    }
}

export default Header;