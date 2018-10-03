import React from "react";
import Edit from "../base/Edit";
import {connect} from "react-redux";
import {saveState, setAddTextSize, setAddTextValue} from "../../store/actions/editActions";

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
        addTextValue: state.edit.addTextValue,
        addTextSize: state.edit.addTextSize,
        addTextVisible: state.display.addText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (e) => {dispatch(setAddTextValue(e.target.value))},
        setAddTextSize: (e) => dispatch(setAddTextSize(e)),
        saveState: () => {dispatch(saveState())},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);