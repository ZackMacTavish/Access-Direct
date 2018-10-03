import React from "react";
import ConfirmDialog from "../base/ConfirmDialog";
import {displayDialog, displayOrderPage} from "../../store/actions/pageActions";
import {PROCEED_TO_ORDER_DIALOG_CLOSE} from "../../const/dialogs";
import {connect} from "react-redux";

class ConfirmDialogContainer extends React.Component{
    render(){
        return(
            <ConfirmDialog proceed={this.props.proceed} close={this.props.close} visible={this.props.open} {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      open: state.display.proceedToOrderDialog,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      close: () => dispatch(displayDialog(PROCEED_TO_ORDER_DIALOG_CLOSE)),
      proceed: () => dispatch(displayOrderPage()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (ConfirmDialogContainer);