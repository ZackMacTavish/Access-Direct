import React from "react";
import Edit from "../base/Edit";
import {connect} from "react-redux";
import {saveState, setAddTextSize, setAddTextValue} from "../../store/actions/editActions";
import {displayOrderPage} from "../../store/actions/pageActions";

class EditContainer extends React.Component{

    render(){
        return (
            <Edit {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.display.edit,
        addTextValue: state.edit.buildLogoProperties.addTextValue,
        addTextSize: state.edit.buildLogoProperties.addTextSize,
        addTextVisible: state.display.addText,
        ...state.edit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (e) => {dispatch(setAddTextValue(e.target.value))},
        setAddTextSize: (e) => dispatch(setAddTextSize(e)),
        saveState: () => {dispatch(saveState())},
        goToOrderScreen: () => dispatch(displayOrderPage()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);