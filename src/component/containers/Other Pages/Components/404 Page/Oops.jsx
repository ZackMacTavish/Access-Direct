import React, {Component} from 'react';
import vector from '../404 Page/Vector.svg';
import '../404 Page/oops.styles.scss';
import logo2 from '../Footer/Logo2.svg';

       class OopsPage extends Component {

    
        render() {
            return (
    
                <div className="oops">
                     <img alt="The logo for Access Direct" className="logo-float" src={logo2} />
                <div className="Oops-flex">
                  
              
                      <img alt="A cartoon of construction workers working on an unfinished house. A metaphor for this 404 page." className="vector-illustration" src={vector} />
                  <h4>Oops. This page is currently being worked on. Please check back in to see our updates.</h4>
      
                  
             
      
                  </div>
      
      
                  </div>
    
    
    
            )
    
        }}
    
    
    export default OopsPage;




