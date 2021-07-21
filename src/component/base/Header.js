import React from 'react';
import '../../scss/base/header.scss';
import {AD_COMPANY, AD_CONTACT, AD_HOME, AD_OUR_PRODUCT, AD_TERMS} from "../../const/links";


class Header extends React.Component {

    render() {
        return (
            <div className="header-wrapper">
                <div className="header">
                    <div className="header-logo">
                        <img src="/img/logo.jpg" alt="Logo"/>
                    </div>
                    <div className="header-nav">
                        <ul>
                            <li><a href={AD_HOME}>HOME</a></li>
                            <li><a href={AD_COMPANY}>COMPANY</a></li>
                            <li><a href={AD_OUR_PRODUCT}>OUR PRODUCTS</a>
                                <ul className="our-products-dropdown">
                                <li><a href="/products">All Products</a></li>
                                <li><a href="/Highpower">Highpower</a></li>
                                <li><a href="#">Pneumatic Switches</a></li>
                                <li><a href="#">Fobs/Cards</a></li>
                                <li><a href="#">Record Usa</a></li>
                                <li><a href="/Zamakast">Zamakast</a></li>
                                </ul>                            
                            </li>
                            <li><a href={AD_TERMS}>TERMS</a></li>
                            <li><a href={AD_CONTACT}>CONTACT</a></li>
                        </ul>

                         
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
