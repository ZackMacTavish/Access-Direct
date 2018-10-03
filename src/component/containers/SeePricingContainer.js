import React, {Component} from "react";
import SeePricing from "../base/SeePricing";
import {connect} from "react-redux";
import {displayDialog} from "../../store/actions/pageActions";
import {PROCEED_TO_ORDER_DIALOG_OPEN} from "../../const/dialogs";

class SeePricingContainer extends Component {
    render() {
        return (
            <SeePricing proceedToOrder={this.props.proceedToOrder}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        proceedToOrder: () => {
            window.scrollTo(0, 0);
            dispatch(displayDialog(PROCEED_TO_ORDER_DIALOG_OPEN));
        }
    }
};

export default connect(null, mapDispatchToProps)(SeePricingContainer);