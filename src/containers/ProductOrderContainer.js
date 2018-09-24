import React from "react";
import ProductOrderWrapper from "../component/layout/ProductOrderWrapper";
import {connect} from "react-redux";
import {displayEditPage} from "../store/actions/pageActions";


class ProductOrderContainer extends React.Component {

    render() {
        return (
            <ProductOrderWrapper object={this.props.object}
                                 handleChange={this.props.handleChange}
                                 visible={this.props.visible}
                                 displayEditPage={this.props.displayEditPage}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        object: state.order.productOrder,
        visible: state.display.order,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // handleChange: (name) => {
        //     alert(name)
        //     return (event) => {
        //         alert(event.target.value)
        //     }
        // },

        displayEditPage: () => dispatch(displayEditPage())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrderContainer);