import React from "react";
import {REDO, SAVE_DESIGN, SHARE_DESIGN, UNDO} from "../../const/actions";
import {lang} from "../../i18/en/lang";
import {REDO_ICON, SAVE_DESIGN_ICON, SHARE_DESIGN_ICON, UNDO_ICON} from "../../const/icons";
import '../../scss/layout/edit-state-wrapper.scss';
import EditButtonContainer from "../containers/EditButtonContainer";

class EditStateWrapper extends React.Component{
    render(){
        return(
            <div className = "edit-state-wrapper">
                <EditButtonContainer img={UNDO_ICON} text={lang.en.edit.undo} action={UNDO}/>
                <EditButtonContainer img={REDO_ICON} text={lang.en.edit.redo} action={REDO}/>
                <EditButtonContainer img={SAVE_DESIGN_ICON} text={lang.en.edit.save_design} action={SAVE_DESIGN}/>
                <EditButtonContainer img={SHARE_DESIGN_ICON} text={lang.en.edit.share_design} action={SHARE_DESIGN}/>
            </div>
        )
    }
}

export default EditStateWrapper;