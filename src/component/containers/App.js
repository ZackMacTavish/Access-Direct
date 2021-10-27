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
import ManufacturerFilter from './Other Pages/Pages/Manufacturer Filter/manufacturer';
import ZamakastFilter from './Other Pages/Pages/Manufacturer Filter/company filters/zamakast-filter';
import RCIFilter from './Other Pages/Pages/Manufacturer Filter/company filters/rci-filter';
import highpowerFilter from './Other Pages/Pages/Manufacturer Filter/company filters/highpower-filter';
import boschFilter from './Other Pages/Pages/Manufacturer Filter/company filters/bosch-filter';
import calroyalFilter from './Other Pages/Pages/Manufacturer Filter/company filters/calroyal-filter';
import camdenFilter from './Other Pages/Pages/Manufacturer Filter/company filters/camden-filters';
import gmsFilter from './Other Pages/Pages/Manufacturer Filter/company filters/gms-filter';
import hagerFilter from './Other Pages/Pages/Manufacturer Filter/company filters/hager-filter';
import monthardFilter from './Other Pages/Pages/Manufacturer Filter/company filters/monthard-filter';
import mssedcoFilter from './Other Pages/Pages/Manufacturer Filter/company filters/mssedco-filters';
import interstateFilter from './Other Pages/Pages/Manufacturer Filter/company filters/interstate-filter';
import recordFilter from './Other Pages/Pages/Manufacturer Filter/company filters/record-filter';
import regentFilter from './Other Pages/Pages/Manufacturer Filter/company filters/regent-filter';
import southwireFilter from './Other Pages/Pages/Manufacturer Filter/company filters/southwire-filter';
import wikkFilter from './Other Pages/Pages/Manufacturer Filter/company filters/wikk-filter';
import dortronicsFilter from './Other Pages/Pages/Manufacturer Filter/company filters/dortronics-filter';


const Loading = () => <div style={{display: 'flex', flexDirection: 'column', color: 'white', justifyContent:'center', alignItems: 'center', fontWeight: '700', height: '100vh', width: '100vw', backgroundColor: '#0400B9'}}>
  <div style={{display: 'flex', flexDirection: 'column'}}> 
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
            
            

<BrowserRouter>
            <Switch>
            <div className="App">
            <Route path='/fob' component={fobPage} />

            <Route path='/zamakast' component={zamakastPage} />

            <Route path='/company' component={Company} />

            <Route path='/products' component={AsyncProducts} />

            <Route path='/manufacturer' component={ManufacturerFilter} />

            <Route path='/zamakast-products' component={ZamakastFilter} />
            <Route path='/rci-products' component={RCIFilter} />
            <Route path='/highpower-products' component={highpowerFilter} />
            <Route path='/bosch-products' component={boschFilter} />
            <Route path='/calroyal-products' component={calroyalFilter} />
            <Route path='/camden-products' component={camdenFilter} />
            <Route path='/gms-products' component={gmsFilter} />
            <Route path='/hager-products' component={hagerFilter} />
            <Route path='/monthard-products' component={monthardFilter} />
            <Route path='/mssedco-products' component={mssedcoFilter} />
            <Route path='/interstate-products' component={interstateFilter} />
            <Route path='/record-products' component={recordFilter} />
            <Route path='/regent-products' component={regentFilter} />
            <Route path='/southwire-products' component={southwireFilter} />
            <Route path='/wikk-products' component={wikkFilter} />
            <Route path='/dortronics-products' component={dortronicsFilter} />

            <Route  path='/highpower' component={highpowerPage} />

            <Route  path='/ditec' component={ditecPage} />

           <Route  path='/lifesavers' component={lifesaversPage} />

            <Route  path='/terms' component={termsFilter} />
                
            <Route path='/Oops' component={OopsPage} />

            <Route exact path='/' component={AsyncHome} />
            </div>
           </Switch>
           
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
