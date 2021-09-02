import React from 'react';
import '../../../../../scss/base/header.scss';
import {AD_COMPANY, AD_CONTACT, AD_HOME, AD_OUR_PRODUCT, AD_TERMS} from "../../../../../const/links";

import hamburger from './Hamburger.svg';

import './ResponsiveMenu.styles.scss';
import Popup from '../ToggleMenu/Togglemenu';


class ResponsiveHeader extends React.Component {
state= {
    seen: false
};

togglePop = () => {
    this.setState({
        seen: !this.state.seen
    });
};
    render() {

       

        return (
            <div className="header-wrapper">
                <div className="header">
                    <div className="header-logo">
                        <img src="/img/logo.jpg" alt="Logo"/>
                    </div>
                    <div className="header-nav">
                        
                       <img 
                       onClick={this.togglePop}
                       className="hamburger-menu"src={hamburger} alt="Navigation Menu" />
                       {this.state.seen ? <Popup toggle={this.togglePop} /> : null}

                         
                    </div>
                </div>
            </div>
        );
    }
}

export default ResponsiveHeader;
