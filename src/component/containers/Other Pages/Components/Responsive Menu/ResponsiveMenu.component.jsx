import React from 'react';
import '../../../../../scss/base/header.scss';
import {AD_COMPANY, AD_CONTACT, AD_HOME, AD_OUR_PRODUCT, AD_TERMS} from "../../../../../const/links";

import hamburger from './Hamburger.svg';

import './ResponsiveMenu.styles.scss';


class ResponsiveHeader extends React.Component {

    render() {
        return (
            <div className="header-wrapper">
                <div className="header">
                    <div className="header-logo">
                        <img src="/img/logo.jpg" alt="Logo"/>
                    </div>
                    <div className="header-nav">
                       <img className="hamburger-menu"src={hamburger} alt="Navigation Menu" />

                         
                    </div>
                </div>
            </div>
        );
    }
}

export default ResponsiveHeader;
