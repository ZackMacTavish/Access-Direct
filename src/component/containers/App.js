import React, {Component} from 'react';
import '../../scss/containers/App.scss';
import Loadable from 'react-loadable';
import {connect} from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import fobPage from './FobPage';
import zamakastPage from './Other Pages/Pages/Zamakast/Zamakast-page';
import highpowerPage from './Other Pages/Pages/Highpower One/highpower';
import OopsPage from './Other Pages/Components/404 Page/Oops';
import termsFilter from './Other Pages/Pages/Terms/terms-filter.page';
import ditecPage from './Other Pages/Pages/Ditec/Ditec';
import logo3 from './Logo2-01.png';
import Company from './Other Pages/Pages/Company/Company';
import lifesaversPage from './Other Pages/Pages/Lifesavers/lifesaver';
import Ligpdf from './Other Pages/Pages/Pdf/lig-pdf';

const Loading = () => <div style={{display: 'flex', flexDirection: 'column', color: 'white', justifyContent:'center', alignItems: 'center', fontWeight: '700', height: '100vh', width: '100vw', backgroundColor: '#1F56BA'}}>
  <div> 
<img src={logo3} /> 
  <h2>...Loading</h2>
  </div>
  </div>;

const AsyncHome = Loadable({
  loader: () => import('./Other Pages/Pages/Home/homePage'),
  loading: Loading,
});


const AsyncProducts = Loadable({
  loader: () => import('./Other Pages/Pages/Products-Filter/products-filter.page'),
  loading: Loading,
});




class App extends Component {
    render() {
        return (
            
            <div className="App">

<BrowserRouter>
            <Switch>
   
            <Route path='/fob' component={fobPage} />

            <Route path='/zamakast' component={zamakastPage} />

            <Route path='/company' component={Company} />

            <Route path='/products' component={AsyncProducts} />

            <Route  path='/highpower' component={highpowerPage} />

            <Route  path='/ditec' component={ditecPage} />


            <Route  path='/lifesavers' component={lifesaversPage} />

            <Route  path='/terms' component={termsFilter} />
                
            <Route path='/Oops' component={OopsPage} />

            <Route exact path='/' component={AsyncHome} />

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
