import React from "react";
import '../../scss/base/drop-logo-description.scss';
import {lang} from "../../i18/en/lang";

class DropLogoDescription extends React.Component {

    render() {
        return (
            <div className="drop-logo-description-wrapper">
                <div className="content">
                    <div className="description-header">
                        <img src="/img/upload.png" alt=""/>
                        <p>Drop Logo Here</p>
                    </div>
                    <div className="info">
                        <p>{lang.en.drop_info.accepted_formats_heading}</p>
                        <p>{lang.en.drop_info.accepted_formats}</p>
                    </div>
                    <div className="info">
                        <p>{lang.en.drop_info.additional_details}</p>
                    </div>
                    <div className="warning">
                        <p>{lang.en.drop_info.warning_1}</p>
                        <p>{lang.en.drop_info.warning_2}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropLogoDescription;