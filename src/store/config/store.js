import React from 'react';
import {combineReducers, createStore} from "redux";
import pageReducer from "../reducers/pageReducer";
import editReducer from "../reducers/editReducer";
import orderReducer from "../reducers/orderReducer";
import Provider from "react-redux/es/components/Provider";
import App from "../../App";

const reducer = combineReducers({
    edit: editReducer,
    order: orderReducer,
    display: pageReducer,
});

const store = createStore(reducer);

const RRedux = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
};


export default RRedux;