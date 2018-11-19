import React from 'react';
import '../../scss/base/fobo-color-picker.scss';
import {
    BLACK_FOBO_COVER_IMG_NAME,
    BLACK_FOBO_IMG_NAME,
    GRAY_FOBO_COVER_IMG_NAME,
    GRAY_FOBO_IMG_NAME,
    RED_FOBO_COVER_IMG_NAME,
    RED_FOBO_IMG_NAME
} from "../../const/images";

class FoboColorPicker extends React.Component {
    render() {
        var classes = 'fobo-color-picker-wrapper';
        if (!this.props.visible) {
            classes += ' hidden';
        }

        return (
            <div className={classes}>
                <div onClick={() => this.props.setBaseImg(BLACK_FOBO_IMG_NAME, BLACK_FOBO_COVER_IMG_NAME)}>
                    <p>FOB BLACK</p>
                </div>
                <div onClick={() => this.props.setBaseImg(GRAY_FOBO_IMG_NAME, GRAY_FOBO_COVER_IMG_NAME)}>
                    <p>FOB GRAY</p>
                </div>
                <div onClick={() => this.props.setBaseImg(RED_FOBO_IMG_NAME, RED_FOBO_COVER_IMG_NAME)}>
                    <p>FOB RED</p>
                </div>
            </div>
        );
    }
}

export default FoboColorPicker;