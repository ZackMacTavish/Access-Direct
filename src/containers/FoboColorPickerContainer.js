import React from "react";
import FoboColorPicker from "../component/FoboColorPicker";
import {connect} from 'react-redux';
import {setBaseImg} from "../store/actions/editActions";

class FoboColorPickerContainer extends React.Component{
    render(){
        return (
            <FoboColorPicker setBaseImg = {this.props.setBaseImg}/>
        );
    }
}

const mapDispatcherToProps = (dispatch) => {
    return {
        setBaseImg: (baseImg) => dispatch(setBaseImg(baseImg))
    }
};

export default connect(null, mapDispatcherToProps)(FoboColorPickerContainer);