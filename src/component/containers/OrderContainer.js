import React from "react";
import OrderForm from "../base/OrderForm";
import {connect} from "react-redux";
import {displayEditPage} from "../../store/actions/pageActions";
import {fieldChange} from "../../store/actions/orderActions";
import Section from "../base/Section";
import {validateField, validateForm} from "../../store/actions/validationAction";


class OrderContainer extends React.Component {
    render() {
        return (
            <Section visible={this.props.visible}>
                <OrderForm object={this.props.object}
                           handleChange={this.props.handleChange}
                           displayEditPage={this.props.displayEditPage}
                           submitOrder={this.props.submitOrder}
                           validateField={this.props.validateField}
                           validatedOrder={this.props.validatedOrder}/>
            </Section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        object: state.order.productOrder,
        visible: state.display.order,
        validatedOrder: state.validator,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (name) => (event) => {
            dispatch(fieldChange(name, event.target.value));
        },

        validateField: (field) => (e) => {
            console.log('Test 1');
            dispatch(validateField(field, e.target.value));
        },

        submitOrder: (state) => (event) => {
            event.preventDefault();

            dispatch(validateForm(state))
        },

        displayEditPage: () => {
            window.scrollTo(0, 0);
            dispatch(displayEditPage());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);