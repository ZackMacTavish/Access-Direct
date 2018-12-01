import React from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Section from "./Section";
import PropTypes from 'prop-types';
import MediaShare from "./MediaShare";

class ADShareDialog extends React.Component {
    render(){
        const { open, onClose, url } = this.props;

        return (
            <div className="ad-share-dialog-wrapper">
                <Dialog className= "ad-share-dialog"
                        open={open}
                        onClose={  () => onClose()}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                    <Section visible={true}>
                        <MediaShare url={url} onClose={onClose}/>
                    </Section>
                </Dialog>
            </div>
        )
    }
}

ADShareDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ADShareDialog;