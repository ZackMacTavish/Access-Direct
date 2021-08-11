import React, {Component} from 'react';
import '../../scss/containers/App.scss';

import {connect} from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import fobPage from './FobPage';
import zamakastPage from './Other Pages/Pages/Zamakast/Zamakast-page';
import highpowerPage from './Other Pages/Pages/Highpower One/highpower';
import productsFilter from './Other Pages/Pages/Products-Filter/products-filter.page';
import homePage from './Other Pages/Pages/Home/homePage';

class App extends Component {
    render() {
        return (
            <div className="App">

            <BrowserRouter>
            <Switch>

             <Route exact path='/' component={homePage} />
               
            <Route exact path='/fob' component={fobPage} />

            <Route exact path='/zamakast' component={zamakastPage} />


            <Route exact path='/products' component={productsFilter} />

            <Route exact path='/highpower' component={highpowerPage} />

           

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
