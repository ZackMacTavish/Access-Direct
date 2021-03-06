import React, {Component} from 'react';
import '../Terms/terms.styles.scss';
//import OtherProducts from "../../Components/View Other Products/viewotherproducts.component";
//import Footer from '../../Components/Footer/Footer.component';

import {TERMS_DATA} from '../Terms/terms-data';



class termsFilter extends Component {
    constructor() {
        super();
        this.state={
            products: TERMS_DATA,
            searchField: ''
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        const { products, searchField} = this.state;
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchField.toLowerCase() ))
            
            
       
        return (
            <div className="terms-filter-page">
                
                <div className="product-filters-header">
                
              
                       <h2>Filter by Terms</h2>
                       <h3 className="product-subheader">Access Direct is proud to create a dictionary for industry wide use.</h3>
                </div>

                <input className="search-bar"
                type='search' 
                placeholder='Search Terms'
                onChange={e => 
                    this.setState({ searchField: e.target.value})}
                        
                    
               
                />

                    <div className="terms-flexed">

                       {
                        filteredProducts.map(product => 
                            
                            
                            <div className="terms-container-flex" key={product.id}> 
                            
                          
                          <div>
                                <h4 className="terms-products-name">{product.name}</h4>
                                {product.click === 'See More' ?  <details><summary style={{cursor: 'pointer'}}>See Image</summary>
                                <img style={{width: '20vw',paddingTop: '5vh'}} src={product.img} />
                                
                                
                                </details> : null }
                                </div>
                              
                                
                                <h4 className="terms-products-description">{product.definition}</h4> 

                                
                            
                            </div>)
                    }

                    </div>

                            
                     

            </div>
        );
    }
}

export default termsFilter;