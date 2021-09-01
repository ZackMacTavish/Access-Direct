import React, {Component} from 'react';
import '../../scss/containers/App.scss';

import {connect} from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import fobPage from './FobPage';
import zamakastPage from './Other Pages/Pages/Zamakast/Zamakast-page';
import highpowerPage from './Other Pages/Pages/Highpower One/highpower';
import productsFilter from './Other Pages/Pages/Products-Filter/products-filter.page';
import homePage from './Other Pages/Pages/Home/homePage';
import OopsPage from './Other Pages/Components/404 Page/Oops';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">

           
            <Switch>

             <Route exact path='/' component={homePage} />
               
            <Route path='/fob' component={fobPage} />


            <Route path='/zamakast' component={zamakastPage} />


            <Route path='/products' component={productsFilter} />

            <Route  path='/highpower' component={highpowerPage} />

                
            <Route path='/Oops' component={OopsPage} />

           

                </Switch>
           
               
            </div>
            </BrowserRouter>
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
