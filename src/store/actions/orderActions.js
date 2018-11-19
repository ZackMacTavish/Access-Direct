import axios from 'axios';
import {FIELD_CHANGE} from "../../const/actions";
import {API_ORDER_SAVE, API_URL} from "../../const/api";
import {fileToBase64} from "../../util/fileUtils";


export const fieldChange = (name, value) => {
    console.log('name: ' + name);
    console.log('value:' + value);
    return {
        type: FIELD_CHANGE,
        name: name,
        value: value,
    }
};

export async function submitOrder(orderRequest) {

    console.log("Submit order requset started." + API_ORDER_SAVE);
    let api = axios({
        url: API_ORDER_SAVE,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // data: JSON.stringify(orderRequest),
        data: orderRequest,
    });

    api.catch(error => console.log(error));
    api.then(response => console.log("Request finished with response: " + response));
}




