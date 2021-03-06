import React, { useState } from "react";
import Product from "./Product";
import Title from './Title';
import { ProductConsumer } from "../context";

import SearchBar from './SearchBar';
const ProductList = props => {
   


    return (
        <div className="py-5">

           
            <div className="container">
            <Title  name='Our' title="Products" />
            
           
            
            </div>  
            <div className="container">

      
            <div className="row">
                
                <ProductConsumer>
                    { (context) =>{
                        return( context.products.map ( product => {
                            return (
                                <Product key={product.id} 
                                         prod={product} 
                                         addToCart={context.addToCart} 
                                         handleDetail={context.handleDetail}  
                                         openModal={context.openModal}  
                                         closeModal={context.closeModal} 
                                 />
                            );
                        }

                        )
                            );
                    }

                    }
                </ProductConsumer>
            </div>
            </div>
        </div>
        );
}

export default ProductList;