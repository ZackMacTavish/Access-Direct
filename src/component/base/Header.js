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
                            <li><a href="/Oops">COMPANY</a></li>
                            <li><a href="/products">OUR PRODUCTS</a>
                                <ul className="our-products-dropdown">
                                <li><a href="/products">All Products</a></li>
                                <li><a href="/Highpower">Highpower</a></li>
                                <li><a href="/Oops">Pneumatic Switches</a></li>
                                <li><a href="/Oops">Fobs/Cards</a></li>
                                <li><a href="/Oops">Record Usa</a></li>
                                <li><a href="/Zamakast">Zamakast</a></li>
                                <li><a href="/Ditec">Ditec</a></li>
                                </ul>                            
                            </li>
                            <li><a href="/Oops">NEWS</a></li>
                            <li><a href="/terms">TERMS</a></li>
                            <li><a href="/Oops">CONTACT</a></li>
                        </ul>

                         
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
