import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import editReducer from './store/reducers/editReducer';
import orderReducer from './store/reducers/orderReducer';
import {Provider} from 'react-redux';
import {combineReducers} from "redux";
import pageReducer from "./store/reducers/pageReducer";

const rootReducer = combineReducers({
    edit: editReducer,
    order: orderReducer,
    display: pageReducer,
});

const store = createStore(rootReducer);

const RRedux = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

ReactDOM.render(<RRedux/>, document.getElementById('root'));
registerServiceWorker();
