import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";


import {PropTypes} from 'prop-types';


const Product = (props) => {
    
  
    
    const {id,title,img,info,incart,total,discount,price} = props.prod;
       
    return(
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
                <div className="img-container p-5 " onClick ={()=>{ console.log("you clicked me bitch"); } } >
                <Link to="/details" >
                    <img  src={img} alt ="prod" className="card-img-top" />

                </Link>
                   <button className="cart-btn"  disabled={incart?true:false}  onClick={()=>{console.log("added to the cart")}}> 
                   {incart?(<p className="text-capitalize mb-0" disabled >inCart </p>): (<i className="fas fa-cart-plus" />) }
                   </button>
                </div>

                <div className="card-footer d-flex justify-content-between "> 
                <h5><p className="align-self-center mb-0">  {title} </p></h5>
                <h5 className="text-blue mb-0">  <span className="mr-1" > $</span>  {price}  </h5>
                </div>

            </div>

        </ProductWrapper>

    )
} 


Product.propTypes ={
    prod:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        img:PropTypes.string,
        info:PropTypes.string,
        incart:PropTypes.bool,
        total:PropTypes.number,
        discount:PropTypes.number,
        price:PropTypes.number,
        
    }).isRequired

}




const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}

.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 0.5s linear;
}


&:hover {
    .card{
        border:0.05rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px  rgba(0,0,0,0.2);
    }

    .card-footer{
        background: rgba(247,247,247)
    }
}
.img-container{
    position:relative;
    overflow:hidden;

}

.card-img-top{
    transition: all 1s linear;
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.5rem;
    background-color: var(--lightblue);
    color:var(--mainWhite);
    border:none;
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0 ;
    transform: translate(100%,100%);
    transition: all 1s linear;

}
.img-container:hover .cart-btn{
    transform: translate(0,0);
    
}


.cart-btn:hover {
    background-color: var(--mainBlue);
    cursor:pointer;
}

.img-container:hover  .card-img-top{
    transform: scale(1.15);
   


}


}
`






export default Product;