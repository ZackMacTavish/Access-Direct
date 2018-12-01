import React from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import Section from "./Section";
import PropTypes from 'prop-types';
import '../../scss/base/confirm-dialog.scss';

class ADDialog extends React.Component {
    render(){
        const { open, onClose, title } = this.props;

        let displayActions = true;

        if(this.props.actions === null){
            displayActions = false;
        }

        return (
            <div className="ad-dialog-wrapper">
                <Dialog className= "ad-dialog"
                        open={open}
                        onClose={  () => onClose()}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                    <DialogTitle className="title" id="simple-dialog-title">{title}</DialogTitle>
                   <Section visible={true}>
                       <DialogActions>
                           {
                            this.props.actions.map(action => {
                                return(
                                    <Button onClick={() => action.onClick()} color="primary">
                                        {action.title}
                                    </Button>
                                )
                            })
                           }
                       </DialogActions>
                   </Section>
                </Dialog>
            </div>
        )
    }
}

ADDialog.defaultProps = {
    title: 'Hello',
    displayActions: false,
    actions: [],
};

ADDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        style: PropTypes.object,
    }))
};

export default ADDialog;