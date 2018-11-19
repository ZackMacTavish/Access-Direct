import React from 'react';
import EditToolButton from "./EditToolButton";
import {REDO_ICON, SAVE_DESIGN_ICON, SHARE_DESIGN_ICON, UNDO_ICON} from "../../const/icons";
import {lang} from "../../i18/en/lang";
import '../../scss/base/editToolsN2.scss';
import {connect} from "react-redux";
import * as editAction from '../../store/actions/editActions';
import {API_LOGO_DOWNLOAD_DESIGN} from "../../const/api";
import axios from 'axios';
import { downloadBase64File} from "../../util/fileUtils";
import {getDesign} from "../../store/actions/editActions";
import ADDialog from "./ADDialog";


class EditToolsN2 extends React.Component {

    constructor(){
        super();
        this.state = {
            dialogOpen: false,
        }
    }

    closeDialog = () => {
        this.setState({
            ...this.state,
            dialogOpen: false,
        })
    };

    openDialog() {
        this.setState({
            ...this.state,
            dialogOpen: true,
        })
    }

    getDesign = () => {
        const userLogoImg = this.props.buildLogoProperties.userLogoImg;

        if(userLogoImg === null){
            this.openDialog();
        } else {
            console.log("Api call started: " + API_LOGO_DOWNLOAD_DESIGN);
            axios.post(API_LOGO_DOWNLOAD_DESIGN, this.props.buildLogoProperties)
                .then(result => {
                    console.log("Download logo returned result:");
                    console.log(result.data);
                    let data = result.data;
                    downloadBase64File(data.file, data.fileName);
                })
                .catch(e => console.log(e))
                .then(() => console.log("Api call end: " + API_LOGO_DOWNLOAD_DESIGN));
        }
    };

    shareDesign = () => {
        alert("...in progress!")
    };

    render() {
        return (
            <div className="edit-tools-n2">
                <div className="content">
                    <EditToolButton img={UNDO_ICON} text={lang.en.edit.undo} action={this.props.undo}/>
                    <EditToolButton img={REDO_ICON} text={lang.en.edit.redo} action={this.props.redo}/>
                    <EditToolButton img={SAVE_DESIGN_ICON} text={lang.en.edit.save_design} action={this.getDesign}/>
                    <EditToolButton img={SHARE_DESIGN_ICON} text={lang.en.edit.share_design} action={this.shareDesign}/>
                </div>
                <ADDialog title="Please upload your logo. "
                          open={this.state.dialogOpen}
                          onClose={this.closeDialog}
                          displayActions={false}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buildLogoProperties: state.edit.buildLogoProperties,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        undo: () => dispatch(editAction.undo()),
        redo: () => dispatch(editAction.redo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditToolsN2);