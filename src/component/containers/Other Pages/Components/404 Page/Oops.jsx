import React, {Component} from 'react';
import vector from '../404 Page/Vector.svg';
import '../404 Page/oops.styles.scss';
import logo2 from '../Footer/Logo2.svg';

       class OopsPage extends Component {

    
        render() {
            return (
    
                <div className="oops">
                     <img className="logo-float" src={logo2} alt="logo" />
                <div className="Oops-flex">
                  
              
                      <img className="vector-illustration" src={vector} />
                  <h4>Oops. This page is currently being worked on. Please check back in to see our updates.</h4>
      
                  
             
      
                  </div>
      
      
                  </div>
    
    
    
            )
    
        }}
    
    
    export default OopsPage;




