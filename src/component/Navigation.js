import React from 'react'
import '../scss/navigation.scss';

class TemplateNavigation extends React.Component {

    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><a href="#">FOBS</a></li>
                    <li><a href="#">CLAMSHELL CARDS</a></li>
                    <li><a href="#">PRINTABLE CARDS</a></li>
                </ul>
            </div>
        );
    }
}

export default TemplateNavigation;