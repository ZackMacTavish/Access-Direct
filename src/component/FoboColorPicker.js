import React from 'react';
import '../scss/fobo-color-picker.scss';
import {BLACK_FOBO_IMG, GRAY_FOBO_IMG, RED_FOBO_IMG} from "../const/images";

class FoboColorPicker extends React.Component {
    render() {
        return (
            <div className="fobo-color-picker-wrapper">
                <div className="content">
                    <div className="picker-header">
                        <p>Choose Product Color</p>
                    </div>
                    <div className="picker-body">
                        <div className="color">
                            <div className="black pointer" onClick={() => this.props.setBaseImg(BLACK_FOBO_IMG)}></div>
                            <p className="name">Black</p>
                        </div>
                        <div className="color">
                            <div className="grey pointer" onClick={() => this.props.setBaseImg(GRAY_FOBO_IMG)}></div>
                            <p className="name">Grey</p>
                        </div>
                        <div className="color">
                            <div className="red pointer" onClick={()=> this.props.setBaseImg(RED_FOBO_IMG)}></div>
                            <p className="name">Red</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoboColorPicker;