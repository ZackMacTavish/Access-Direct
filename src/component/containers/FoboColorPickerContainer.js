import React from "react";
import FoboColorPicker from "../base/FoboColorPicker";
import {connect} from 'react-redux';
import {setBaseImg} from "../../store/actions/editActions";

class FoboColorPickerContainer extends React.Component{
    render(){
        return (
            <FoboColorPicker setBaseImg = {this.props.setBaseImg} {...this.props}/>
        );
    }
}

const mapDispatcherToProps = (dispatch) => {
    return {
        setBaseImg: (baseImg, baseCoverImg) => dispatch(setBaseImg(baseImg, baseCoverImg))
    }
};

export default connect(null, mapDispatcherToProps)(FoboColorPickerContainer);