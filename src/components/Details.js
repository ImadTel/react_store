import React from "react";

import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartButton from "./Button";




const Details = props =>{
    return( 
       
        <ProductConsumer>
            
           {
               context => { 
                const {id,title,img,info,incart,total,discount,price} = context.details;
               
                return(
                    <div className="container py-5">
                        {/*title*/}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-blue my-5 text-slanted">
                                <h1>{title} </h1>
                            </div>
                            
                        </div>
                        {/*dets*/}
                        <div className="row">
                            <div className=" col-10 col-md-6 mr-2  my-3 text-capitalize">
                                <img src={img} alt="image"  className="img-fluid"/>
                            </div>
                            <div className="col-10 col-md-6    my-3 text-capitalize">
                                <h2 >model: {title}</h2>

                                <h4 className="text-capitalze text-blue">
                                    price : <span>$</span> <strong>{price}</strong>
                                </h4>
                                <p className="font-weight-bold mb-0 mt-3">
                                   <b> some Info about the product :</b> <br/>
                                   
                                </p>
                                <p className="text-muted ">
                                
                                    {info}
                                </p>
                                    {/*buttons */ }
                                <div>
                                    <Link to="/" >
                                        <CartButton  nocart>
                                            Back to Products
                                        </CartButton>

                                    </Link>

                                    <Link to="#" >
                                        <CartButton   disabled={incart?true:false } nocart  onClick={()=> context.addToCart(id)}>
                                            {incart? "inCart":"Add to Cart"}
                                        </CartButton>
                                    </Link>


                                </div>
                            </div>
                        </div>
                        
                    </div> 
                )
            }
         
           }

          
        </ProductConsumer>
        
    )
}

export default Details;