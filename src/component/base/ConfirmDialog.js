import React from "react";
import '../../scss/base/confirm-dialog.scss';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import {lang} from "../../i18/en/lang";
import Button from "@material-ui/core/Button/Button";

class ConfirmDialog extends React.Component{
    render(){
        return(
            <div className="confirm-dialog-wrapper">
                <Dialog classes={{paper: 'dialog-box'}} aria-labelledby="simple-dialog-title" open={this.props.open}>
                    <DialogTitle className="title" id="simple-dialog-title">{this.props.title}</DialogTitle>
                    <div className="buttons">
                        <Button onClick={this.props.close} color="primary">{lang.en.no}</Button>
                        <Button onClick={this.props.proceed} color="primary">{lang.en.yes_proceed}</Button>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default ConfirmDialog;