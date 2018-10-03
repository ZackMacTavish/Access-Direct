import React from 'react';
import '../../scss/base/fobo-color-picker.scss';
import {
    BLACK_FOBO_COVER_IMG,
    BLACK_FOBO_IMG,
    GRAY_FOBO_COVER_IMG,
    GRAY_FOBO_IMG, RED_FOBO_COVER_IMG,
    RED_FOBO_IMG
} from "../../const/images";

class FoboColorPicker extends React.Component {
    render() {
        var classes = 'fobo-color-picker-wrapper';
        if(!this.props.visible){
            classes += ' hidden';
        }

        return (
            <div className={classes}>
                <div onClick={() => this.props.setBaseImg(BLACK_FOBO_IMG, BLACK_FOBO_COVER_IMG)}>
                    <p>FOB BLACK</p>
                </div>
                <div onClick={() => this.props.setBaseImg(GRAY_FOBO_IMG, GRAY_FOBO_COVER_IMG)}>
                    <p>FOB GRAY</p>
                </div>
                <div onClick={() => this.props.setBaseImg(RED_FOBO_IMG, RED_FOBO_COVER_IMG)}>
                    <p>FOB RED</p>
                </div>
            </div>
        );
    }
}

export default FoboColorPicker;