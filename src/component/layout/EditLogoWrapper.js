import React from 'react';
import '../../scss/layout/edit-logo-wrapper.scss';
import EditButtonContainer from "../containers/EditButtonContainer";
import {CENTER_LOGO_ICON, ROTATE_RIGHT_ICON, ZOOM_ICON} from "../../const/icons";
import {lang} from "../../i18/en/lang";
import {CENTER_LOGO, ROTATE_RIGHT, TOGGLE_SLIDE, ZOOM_LOGO} from "../../const/actions";
import SliderContainer from "../containers/SliderContainer";


class EditLogoWrapper extends React.Component{
    render() {
        return (
            <div className = "edit-logo-wrapper">
               <div className="slider">
                   <SliderContainer/>
               </div>
                <div className="buttons">
                    <EditButtonContainer img={ZOOM_ICON} text={lang.en.edit.zoom} action={TOGGLE_SLIDE}/>
                    <EditButtonContainer img={CENTER_LOGO_ICON} text={lang.en.edit.center_logo} action={CENTER_LOGO}/>
                    <EditButtonContainer img={ROTATE_RIGHT_ICON} text={lang.en.edit.rotate} action={ROTATE_RIGHT}/>
                </div>
            </div>
        );
    }
}


export default EditLogoWrapper;