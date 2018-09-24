import React from "react";
import EditWrapper from "../component/layout/EditWrapper";
import {connect} from "react-redux";
import {displayOrderPage} from "../store/actions/pageActions";

class EditContainer extends React.Component{
    render(){
        return (
            <EditWrapper visible = {this.props.visible} displayOrderPage={this.props.displayOrderPage}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.display.edit
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      displayOrderPage: () => dispatch(displayOrderPage())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);