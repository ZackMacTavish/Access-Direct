import React from "react";
import ShowIdPicker from "../base/ShowIdPicker";
import {connect} from "react-redux";
import {fieldChange} from "../../store/actions/orderActions";

class ShowIdPickerContainer extends React.Component{
    render(){
        return(
            <ShowIdPicker facilityCodeDisplay={this.props.facilityCodeDisplay}
                          formatDisplay={this.props.formatDisplay}
                          handleFieldChange={this.props.handleFieldChange}/>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        facilityCodeDisplay: state.order.productOrder.facilityCodeDisplay,
        formatDisplay: state.order.productOrder.formatDisplay,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFieldChange: (name) => (e) => dispatch(fieldChange(name, e.target.checked)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowIdPickerContainer);