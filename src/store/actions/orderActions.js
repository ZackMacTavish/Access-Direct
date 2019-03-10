import axios from 'axios';
import {API_ORDER_SAVE} from "../../const/api";

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




