import React, {Component} from "react";
import SeePricing from "../component/SeePricing";
import {connect} from "react-redux";
import {displayOrderPage} from "../store/actions/pageActions";
import {DISPLAY_ORDER_PAGE} from "../const/actions";

class SeePricingContainer extends Component {
    render() {
        return (
            <SeePricing displayOrderPage={this.props.displayOrderPage}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayOrderPage: () => {
            // alert("dispatch");
            console.log('primio od childa i dispatchujem')
            // dispatch(displayOrderPage());
            dispatch({type: 'DISPLAY_ORDER_PAGE'});
        }

    }
};

export default connect(null, mapDispatchToProps)(SeePricingContainer);