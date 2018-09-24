import React from "react";
import {lang} from "../../i18/en/lang";
import ResultContainer from "../../containers/ResultContainer";
import EditStateWrapper from "./EditStateWrapper";
import FoboColorPickerContainer from "../../containers/FoboColorPickerContainer";
import DropLogoContainer from "../../containers/DropLogoContainer";
import EditLogoWrapper from "./EditLogoWrapper";
import SeePricing from "../SeePricing";
import '../../scss/layout/edit-wrapper.scss';
import SeePricingContainer from "../../containers/SeePricingContainer";

class EditWrapper extends React.Component{
    render(){
        var className = 'edit-wrapper';
        if(!this.props.visible){
            className += ' hidden';
        }

        return(
            <div className={className}>
                <div className="left">
                    <p className="title">{lang.en.result_title}</p>
                    <ResultContainer/>
                    <EditStateWrapper/>
                    <p className="info">{lang.en.result_info}</p>
                </div>
                <div className="right">
                    <FoboColorPickerContainer/>
                    <DropLogoContainer/>
                    <div className="bottom">
                        <EditLogoWrapper/>
                        {/*<AddComments/>*/}
                        <SeePricingContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditWrapper;