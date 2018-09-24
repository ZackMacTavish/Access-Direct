import {FIELD_CHANGE} from "../../const/actions";

const initialState = {
 productOrder: {
     name: 'Filip',
     nameOfBusiness: '',
     address: '',
     city: '',
     state: '',
     zipCode: '',
     phoneNumber: '',
     emailAddress: '',

     formatting: null,

     facilityCode: null,
     startingNumber: null,
     quantity: null,
 }
};

const orderReducer = (state = initialState, action) => {
    console.log('Order reducer recived: ' + action.type);
    if(action.type == FIELD_CHANGE){
        console.log('epicki');
        return {
            ...state,
            [action.name]: action.value,
        }
    }

    return state;
};

export default orderReducer;