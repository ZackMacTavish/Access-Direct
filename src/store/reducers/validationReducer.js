import {VALIDATE, VALIDATE_FORM} from "../../const/actions";


const initState = {
        isValid: true,
        name: {
            isValid: true,
            message: '',
        },
        nameOfBusiness: {
            isValid: true,
            message: '',
        },
        address: {
            isValid: true,
            message: '',
        },
        city: {
            isValid: true,
            message: '',
        },
        state: {
            isValid: true,
            message: '',
        },
        zipCode: {
            isValid: true,
            message: '',
        },
        phoneNumber: {
            isValid: true,
            message: '',
        },
        emailAddress: {
            isValid: true,
            message: '',
        },
        formatting: {
            isValid: true,
            message: '',
        },
        facilityCode: {
            isValid: true,
            message: '',
        },
        startingNumber: {
            isValid: true,
            message: '',
        },
        quantity: {
            isValid: true,
            message: '',
        },
};

const validationReducer = (state=initState, action) => {

    switch(action.type){
        case VALIDATE: {
            return {
                ...state,
                ...action.result
            }
        }

        case VALIDATE_FORM: {
            return {
                ...state,
                ...action.result,
            }
        }
    }

    return state;
};

export default validationReducer;