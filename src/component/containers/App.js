import React, {Component} from 'react';
import '../../scss/containers/App.scss';

import FobTemplatePicker from "./FobTemplatePicker";
import Header from "../base/Header";
import EditContainer from "./EditContainer";
import OrderContainer from "./OrderContainer";
import {connect} from 'react-redux';

class App extends Component {
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

const mapStateToProps = (state) => {
  return {
      displayFobTemplatePicker: state.display.edit
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
