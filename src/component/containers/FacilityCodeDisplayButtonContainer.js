import React from "react";
import FacilityCodeDisplayButton from "../base/FacilityCodeDisplayButton";
import {connect} from "react-redux";
import {setFormat} from "../../store/actions/editActions";

class FacilityCodeDisplayButtonContainer extends React.Component{
    render(){
        return(
            <FacilityCodeDisplayButton {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formatDisplay: state.edit.buildLogoProperties.format,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFormat: (e) => dispatch(setFormat(e.target.checked))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FacilityCodeDisplayButtonContainer);