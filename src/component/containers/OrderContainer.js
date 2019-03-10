import React from "react";
import OrderForm from "../base/OrderForm";
import {connect} from "react-redux";
import {displayEditPage} from "../../store/actions/pageActions";
import Section from "../base/Section";
import rules from "../../validation/ad-rules";
import * as Validator from "../../validation/FormValidation";
import {lang} from "../../i18/en/lang";
import ADDialog from "../base/ADDialog";
import {submitOrder} from "../../store/actions/orderActions";
import {resetState} from "../../store/actions/editActions";
import {uploadFile, uploadFiles} from "../../rest/StorageRest";


class OrderContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            thanksDialogVisible: false,
            dropZoneLoading: false,
            order: {
                isValid: false,
                name: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                nameOfBusiness: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                address: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                city: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                state: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                zipCode: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                phoneNumber: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                emailAddress: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                formatting: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                facilityCode: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                startingNumber: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                quantity: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                infoToIncludeInPrint: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                additionalInfo: {
                    value: '',
                    isValid: true,
                    message: '',
                },
                facilityCodeDisplay: true,
                formatDisplay: true,
            },
            attachments: [],
        }
    }

    validateForm = () => {
        let isFormValid = true;

        let newState = this.state;

        try {
            for (const [fieldName, fieldRules] of Object.entries(rules)) {
                const fieldValue = this.state.order[fieldName].value;
                let validationResult = Validator.validateField(fieldValue, fieldRules);
                const isValid = validationResult.isValid;
                const message = validationResult.message;

                newState.order[fieldName].isValid = isValid;
                newState.order[fieldName].message = message;

                if (!isValid) {
                    isFormValid = false;
                }
            }
        } catch (e) {
            console.log("Error occurred during process: [validateForm()]");
            console.log(e);
            isFormValid = false;
        }

        this.setState(newState);

        return isFormValid;
    };

    validateField = (name, value) => {
        console.log(`Validate filed  [field: ${name}, value: ${value}]`);

        const fieldRules = rules[name];
        const isValidResult = Validator.validateField(value, fieldRules);

        console.log(`Validation result: [isValid: ${isValidResult.isValid}, message: ${isValidResult.message}]`);

        const prevState = this.state;
        console.log(prevState);

        const newState = {
            ...prevState,
            order: {
                ...prevState.order,
                [name]: {
                    value: value,
                    isValid: isValidResult.isValid,
                    message: isValidResult.message,
                },
            }
        };
        console.log(newState);
        this.setState(newState);
        console.log(this.state);

        return isValidResult.isValid;
    };

    handleFieldChange = (name, value) => {

        const prevState = this.state;

        const newState = {
            ...prevState,
            order: {
                ...prevState.order,
                [name]: {
                    ...prevState.order[name],
                    value: value,
                },
            }
        };

        this.setState(newState);
    };

    buildOrderDetailsObject = () => {
        let result = {};

        for (const [key, value] of Object.entries(this.state.order)) {
            result[key] = value.value;
        }

        result.resourceKeys = [...this.state.attachments];

        return result;
    };


    submitOrder = () => {
        const isFormValid = this.validateForm();

        if (isFormValid) {
            this.openThanksDialog();
            this.props.displayEditPage();
            const orderDetails = this.buildOrderDetailsObject();

            let order = {
                orderDetails: orderDetails,
                buildLogoSpecification: this.props.buildLogoProperties,
            };

            console.log(order);
            submitOrder(order).then(()=> {
                this.props.resetState();
            });
        }
    };

    openThanksDialog = () => {
        this.setState({
            ...this.state,
            thanksDialogVisible: true,
        })
    };

    closeThanksDialog = () => {
        this.setState({
            ...this.state,
            thanksDialogVisible: false,
        })
    };

    onDropHandler = async (files) => {
        this.setState({dropZoneLoading: true});
        let attachments = [...this.state.attachments];

        const resourceKeys = await uploadFiles(files);

        if (resourceKeys) {
            resourceKeys.forEach(resourceKeys => {
                attachments.push({
                    originalName: resourceKeys.originalName,
                    uniqueName: resourceKeys.uniqueName
                });
            });
        }

        let newState = {
            ...this.state,
            attachments,
            dropZoneLoading: false
        };

        this.setState(newState);
    };

    onDeleteAttachmentHandler = (uniqueFileName) => {
        let attachments = [...this.state.attachments];

        attachments.forEach((e, index) => {
           if(e.uniqueName === uniqueFileName) {
               attachments.splice(index, 1);
           }
        });

        this.setState({
            attachments: attachments
        })
    };

    render() {
        return (
            <Section visible={this.props.visible}>
                <OrderForm object={this.state.order}
                           handleChange={this.handleFieldChange}
                           displayEditPage={this.props.displayEditPage}
                           submitOrder={this.submitOrder}
                           validateField={this.validateField}
                           onDrop={this.onDropHandler}
                           onDeleteAttachment={this.onDeleteAttachmentHandler}
                           fileNames={this.state.attachments}
                           dropZoneLoading={this.state.dropZoneLoading}/>
                <ADDialog title={lang.en.dialog.thanks_for_filling_form}
                          open={this.state.thanksDialogVisible}
                          onClose={() => this.closeThanksDialog()}/>
            </Section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.display.order,
        buildLogoProperties: state.edit.buildLogoProperties,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        displayEditPage: () => {
            window.scrollTo(0, 0);
            dispatch(displayEditPage());
        },
        resetState: () => {
            dispatch(resetState())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);