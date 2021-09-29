import React from 'react';
import '../../scss/base/header.scss';
import { Link } from 'react-router-dom';
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
                            <li><Link to='./company'>COMPANY</Link></li>
                            <li><a href="/products">OUR PRODUCTS</a>
                                <ul className="our-products-dropdown">
                                <li><Link to="./products">All Products</Link></li>
                                <li><Link to='./Highpower'>Highpower</Link></li>
                                <li><a href={AD_SWITCHES}>Pneumatic Switches</a></li>
                                <li><a href={AD_FOBS}>Fobs/Cards</a></li>
                                <li><a href={AD_RECORD}>Record Usa</a></li>
                                <li><Link to='./Zamakast'>Zamakast</Link></li>
                                <li><Link to='./Ditec'>Ditec</Link></li>
                                <li><Link to="./lifesavers">Lifesavers</Link></li>
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
