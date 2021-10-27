import React, {Component} from 'react';


import '../../Products-Filter/products-filter.styles.scss';



import Header from '../../../../../base/Header';
import ResponsiveHeader from '../../../Components/Responsive Menu/ResponsiveMenu.component';
import { PRODUCT_DATA } from '../../Products-Filter/products-data/products-data';



class gmsFilter extends Component {
    constructor() {
        super();
        this.state={
            products: PRODUCT_DATA,
            searchField: ''
        };
    }


    render() {
        const { products, searchField} = this.state;
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchField.toLowerCase()) && product.company === 'GMS/KSP'
            ) 

            
       
        return (
            <div className="products-filter-page">
                {window.innerWidth > 800 ? <Header/> : <ResponsiveHeader /> }
               

                <div className="product-filters-header">
                
              
                       <h2>Filter by GMS/KSP</h2>
                       <h3 className="product-subheader">Access Direct is proud to carry multiple GMS/KSP products.</h3>
                </div>

                <input className="search-bar"
                type='search' 
                placeholder='Search Products'
                onChange={e => 
                    this.setState({ searchField: e.target.value})}
                        
                    
               
                />

                    <div className="products-flexed">

                       {
                        filteredProducts.map(product => 
                            <div className="products-container-grid" key={product.id}> 
                            
                            <img className="images-products-render" src={product.image}/>
                            <h3 className="images-products-company">{product.company}</h3> 
                            <h4 className="images-products-name">{product.name}</h4>
                                <a className="a-link-click-through"
                                href={product.url}>
                                    {product.click ='See more' ?  <h4 className="images-products-url">{product.click}</h4> : <h4></h4> }
                              
                                </a> 
                            
                            </div>)
                    }



                    </div>

                            
                       

            </div>
        );
    }
}

export default gmsFilter;