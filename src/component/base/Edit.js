import React from "react";
import {lang} from "../../i18/en/lang";
import ResultContainer from "../containers/ResultContainer";
import EditStateWrapper from "../layout/EditStateWrapper";
import FoboColorPickerContainer from "../containers/FoboColorPickerContainer";
import DropLogoContainer from "../containers/DropLogoContainer";
import EditLogoWrapper from "../layout/EditLogoWrapper";
import '../../scss/layout/edit-wrapper.scss';
import SeePricingContainer from "../containers/SeePricingContainer";
import AdvertisementWrapper from "../layout/AdvertisementWrapper";
import ShowIdPickerContainer from "../containers/ShowIdPickerContainer";
import AddText from "../base/AddText";
import Section from "./Section";

class Edit extends React.Component {
    render() {
        return (
            <Section visible={this.props.visible} classes='edit-wrapper'>
                <div className="template">
                    <FoboColorPickerContainer visible={this.props.visible}/>
                </div>
                <div className="edit-content">
                    <div className="edit-body">
                        <div className="left">
                            <p className="title">{lang.en.result_title}</p>
                            <ResultContainer/>
                            <EditStateWrapper/>
                            <p className="info">{lang.en.result_info}</p>
                        </div>
                        <div className="right">
                            {/*<AddText visible={this.props.addTextVisible}*/}
                                     {/*size={this.props.addTextSize}*/}
                                     {/*value={this.props.addTextValue}*/}
                                     {/*changeText={this.props.changeText}*/}
                                     {/*saveState={this.props.saveState}/>*/}
                            <DropLogoContainer/>
                            <ShowIdPickerContainer/>
                            <div className="bottom">
                                <EditLogoWrapper/>
                                {/*<AddComments/>*/}
                                <SeePricingContainer/>
                            </div>
                        </div>
                    </div>
                </div>
                <AdvertisementWrapper/>
            </Section>
        )
    }
}

export default Edit;