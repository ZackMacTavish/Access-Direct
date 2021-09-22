import React from 'react';
import '../../scss/base/header.scss';
import {AD_COMPANY, AD_CONTACT, AD_HOME, AD_OUR_PRODUCT, AD_TERMS, AD_NEWS, AD_SWITCHES, AD_FOBS, AD_RECORD} from "../../const/links";


class Header extends React.Component {

    render() {
        return (
            <div className="header-wrapper">
                <div className="header">
                    <div className="header-logo">
                        <img src="/img/logo.jpg" alt="Logo"/>
                    </div>
                    <div className="header-nav">
                        <ul className="first-ul">
                            <li><a href={AD_HOME}>HOME</a></li>
                            <li><a href={AD_COMPANY}>COMPANY</a></li>
                            <li><a href="/products">OUR PRODUCTS</a>
                                <ul className="our-products-dropdown">
                                <li><a href="/products">All Products</a></li>
                                <li><a href="/Highpower">Highpower</a></li>
                                <li><a href={AD_SWITCHES}>Pneumatic Switches</a></li>
                                <li><a href={AD_FOBS}>Fobs/Cards</a></li>
                                <li><a href={AD_RECORD}>Record Usa</a></li>
                                <li><a href="/Zamakast">Zamakast</a></li>
                                <li><a href="/Ditec">Ditec</a></li>
                                <li><a href="/lifesavers">Lifesavers</a></li>
                                </ul>                            
                            </li>
                            <li><a href={AD_NEWS}>NEWS</a></li>
                            <li><a href="/terms">TERMS</a></li>
                            <li><a href={AD_CONTACT}>CONTACT</a></li>
                        </ul>

                         
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
