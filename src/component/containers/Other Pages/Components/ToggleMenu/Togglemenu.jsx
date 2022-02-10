import React from 'react';
import './togglemenu.styles.scss';
import { Link } from 'react-router-dom';


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
                            <li><Link to='./'>HOME</Link></li>
                            <li><Link to="./company">COMPANY</Link></li>
                            <li><Link to="./products">OUR PRODUCTS</Link>                          
                            </li>
                            <li><a href="https://www.info.access-direct.net/news-1">NEWS</a></li>
                            <li><Link to="./terms">TERMS</Link></li>
                            <li><a href="https://www.info.access-direct.net/map">CONTACT</a></li>
                        </ul>
            </div>
         </div>
        );
    }
}

export default Popup;
