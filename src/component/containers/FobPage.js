import React, {Component} from 'react';
import '../../scss/containers/App.scss';

import FobTemplatePicker from "./FobTemplatePicker";
import Header from "../base/Header";
import EditContainer from "./EditContainer";
import OrderContainer from "./OrderContainer";

class fobPage extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <FobTemplatePicker visible={this.props.displayFobTemplatePicker}/>
                <div className="flex-center">
                    <EditContainer/>
                    <OrderContainer/>
                </div>
            </div>
        );
    }
}

export default fobPage;