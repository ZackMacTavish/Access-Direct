import React, {Component} from 'react';


import '../Products-Filter/products-filter.styles.scss';


import Header from "../../../../base/Header";
import ResponsiveHeader from '../../Components/Responsive Menu/ResponsiveMenu.component';
import { MANUFACTURER_DATA } from './manufacturer-data/manufacturer-data';

import {PRODUCT_DATA} from '../Products-Filter/products-data/products-data';



class ManufacturerFilter extends Component {
    constructor() {
        super();
        this.state={
            manufacturers: MANUFACTURER_DATA,
            products: PRODUCT_DATA,
            searchField: ''
        };
    }


    render() {
        const { products, manufacturers, searchField} = this.state;
        const filteredManufacturers = manufacturers.filter(manufacturer =>
            manufacturer.company.toLowerCase().includes(searchField.toLowerCase()))

            
       
        return (
            <div className="products-filter-page">
                {window.innerWidth > 800 ? <Header/> : <ResponsiveHeader /> }
               

                <div className="product-filters-header">
                
              
                       <h2>Filter by Manufacturer</h2>
                       <h3 className="product-subheader">Access Direct is proud to partner with over 250 companies.</h3>
                </div>

                <input className="search-bar"
                type='search' 
                placeholder='Search Products'
                onChange={e => 
                    this.setState({ searchField: e.target.value})}
                        
                    
               
                />

                    <div className="products-flexed">

                       {
                        filteredManufacturers.map(manufacturer => 
                            <div className="products-container-grid" key={manufacturer.id}> 
                            
                            <img className="images-products-render" src={manufacturer.image}/>
                            <h3 className="images-products-company">{manufacturer.company}</h3> 
                                <a className="a-link-click-through"
                                href={manufacturer.url}>
                                    {manufacturer.click ='See more' ?  <h4 className="images-products-url">{manufacturer.click}</h4> : <h4></h4> }
                              
                                </a> 
                            
                            </div>)
                    }



                    </div>

                            
                       

            </div>
        );
    }
}

export default ManufacturerFilter;