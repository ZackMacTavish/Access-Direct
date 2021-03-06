import React, {Component} from 'react';


import '../Products-Filter/products-filter.styles.scss';

import { MANUFACTURER_DATA } from './manufacturer-data/manufacturer-data';

import {PRODUCT_DATA} from '../Products-Filter/products-data/products-data';
import { Link } from 'react-router-dom';



class ManufacturerFilter extends Component {
    constructor() {
        super();
        this.state={
            manufacturers: MANUFACTURER_DATA,
            products: PRODUCT_DATA,
            searchField: ''
        };
    }

      componentDidMount() {
        window.scrollTo(0, 0);
    }



    render() {
        const { manufacturers, searchField} = this.state;
        const filteredManufacturers = manufacturers.filter(manufacturer =>
            manufacturer.company.toLowerCase().includes(searchField.toLowerCase()))

            
       
        return (
            <div className="products-filter-page">

                <div className="search-manufacturer">
                        <h4 className="manufacturer-header">Click here to search All Products</h4>
                        <Link className="search-manufacturer-button" to='./products'>
                        <button className="search-manufacturer-button">Search by Products</button>
                        </Link>
                </div>

               

                <div className="product-filters-header">
                
              
                       <h2>Filter by Manufacturer</h2>
                       <h3 className="product-subheader">Access Direct is proud to partner with over 250 companies.</h3>
                </div>

                <input className="search-bar"
                type='search' 
                placeholder='Search Manufacturer'
                onChange={e => 
                    this.setState({ searchField: e.target.value})}
                        
                    
               
                />

                    <div className="products-flexed">

                       {
                        filteredManufacturers.map(manufacturer => 
                            <div className="manufacturer-container-grid" key={manufacturer.id}> 
                            
                            <img alt="The manufacturers logo" className="images-products-render" src={manufacturer.image}/>
                            <h3 className="images-products-company2">{manufacturer.company}</h3> 
                                <a className="a-link-click-through"
                                href={manufacturer.url}>
                                    {manufacturer.click === 'See More' ?  <h4 className="images-products-url">{manufacturer.click}</h4> : null }
                              
                                </a> 
                            
                            </div>)
                    }



                    </div>

                            
                       

            </div>
        );
    }
}

export default ManufacturerFilter;