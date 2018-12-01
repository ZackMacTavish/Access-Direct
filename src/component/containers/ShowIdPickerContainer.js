import React from "react";
import ShowIdPicker from "../base/ShowIdPicker";
import {connect} from "react-redux";
import {fieldChange} from "../../store/actions/orderActions";
import {SET_FACILITY_CODE, SET_FORMAT} from "../../const/actions";
import {setFacilityCode, setFormat} from "../../store/actions/editActions";

class ShowIdPickerContainer extends React.Component{
    render(){
        return(
            <ShowIdPicker {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        facilityCodeDisplay: state.edit.buildLogoProperties.facilityCode,
        formatDisplay: state.edit.buildLogoProperties.format,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFacilityCode: (e) => dispatch(setFacilityCode(e.target.checked)),
        setFormat: (e) => dispatch(setFormat(e.target.checked))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowIdPickerContainer);