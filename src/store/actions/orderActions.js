import {FIELD_CHANGE, SUBMIT_ORDER, VALIDATE_FIELD} from "../../const/actions";

export const fieldChange = (name, value) => {
    console.log('name: ' + name);
    console.log('value:' + value);
    return {
        type: FIELD_CHANGE,
        name: name,
        value: value,
    }
};



