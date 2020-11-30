import React, {Component} from 'react';
import '../../scss/containers/App.scss';

import {connect} from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import fobPage from './FobPage';

class App extends Component {
    render() {
        return (
            <div className="App">

            <BrowserRouter>
            <Switch>
               
            <Route exact path='/' component={fobPage} />

           

                </Switch>
                </BrowserRouter>
               
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
