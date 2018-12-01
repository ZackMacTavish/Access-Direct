import {FIELD_CHANGE} from "../../const/actions";

const initialState = {
    productOrder: {
        name: '',
        nameOfBusiness: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        emailAddress: '',
        formatting: '',
        facilityCode: '',
        startingNumber: '',
        quantity: '',
        additionalInfo: '',
        // facilityCodeDisplay: true,
        // formatDisplay: true,
    },
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIELD_CHANGE: {
            return {
                ...state,
                productOrder: {
                    ...state.productOrder,
                    [action.name]: action.value,
                }
            }
        }
    }

    return state;
};

export default orderReducer;