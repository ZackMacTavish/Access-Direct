import React from 'react'
import '../../scss/base/navigation.scss';
import {lang} from "../../i18/en/lang";

class TemplateNavigation extends React.Component {

    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><a href="#">{lang.en.breadcrumbs.black_fobo}</a></li>
                    <li><a href="#">{lang.en.breadcrumbs.gray_fobo}</a></li>
                    <li><a href="#">{lang.en.breadcrumbs.red_fobo}</a></li>
                </ul>
            </div>
        );
    }
}

export default TemplateNavigation;