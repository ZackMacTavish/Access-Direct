import React, {Component} from 'react';


import '../../Products-Filter/products-filter.styles.scss';
import { PRODUCT_DATA } from '../../Products-Filter/products-data/products-data';
import { Link } from 'react-router-dom';



class ViscoFilter extends Component {
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
            product.name.toLowerCase().includes(searchField.toLowerCase()) && product.company === 'Visco'
            ) 

            
       
        return (
            <div className="products-filter-page">
               

                <div className="product-filters-header">
                
              
                       <h2>Filter by Visco</h2>
                       <h3 className="product-subheader">Access Direct is proud to carry multiple Visco products.</h3>
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
                            
                            <img alt="Visco products" className="images-products-render" src={product.image}/>
                            <h3 className="images-products-company">{product.company}</h3> 
                            <h4 className="images-products-name">{product.name}</h4>
                            <h4 className="images-products-description">{product.description}</h4>
                               {product.click === 'See more' ? <Link  to={product.url} className="a-link-click-through"><h4 className="images-products-url">{product.click}</h4> </Link>   : null }
                            
                            </div>)
                    }



                    </div>

                            
                       

            </div>
        );
    }
}

export default ViscoFilter;