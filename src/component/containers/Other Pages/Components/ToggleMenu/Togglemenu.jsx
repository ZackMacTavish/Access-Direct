import React from 'react';
import './togglemenu.styles.scss';
import {AD_COMPANY, AD_CONTACT, AD_HOME, AD_OUR_PRODUCT, AD_TERMS} from "../../../../../const/links";


class Popup extends React.Component {
    handleClick = () => {
        this.props.toggle();
       };
    render() {

        return (
            <div className="modal">
            <div className="modal_content">
              <span 
              onClick={this.handleClick}
             
              className="close">&times;</span>
              <ul className="responsive-list">
                            <li><a href={AD_HOME}>HOME</a></li>
                            <li><a href="/Oops">COMPANY</a></li>
                            <li><a href="/products">OUR PRODUCTS</a>                          
                            </li>
                            <li><a href="/Oops">NEWS</a></li>
                            <li><a href="/terms">TERMS</a></li>
                            <li><a href="/Oops">CONTACT</a></li>
                        </ul>
            </div>
         </div>
        );
    }
}

export default Popup;
