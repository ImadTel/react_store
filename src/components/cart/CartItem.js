import React from "react";



export default function CartItem( {product,value}) {
    const  {id,title,img,count,price, total} = product;
    const {increment,decrement,removeProduct,clearCart} = value;
    
    return(
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="Product" className="img-fluid"  style={{width:"4rem",height:"4rem"}}  />
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product : </span>  {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span> <span> $</span> {price}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                <span className="btn btn-black mx-1"  onClick={()=>decrement(id)}>-</span>

                <span className="mx-1">   <span className="btn btn-black"> {count} </span></span> 

                <span className="btn btn-black mx-1"  onClick={()=>increment(id)}>+</span>
                </div>

                
                
                

                


            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon"  onClick={()=>removeProduct(id)} >
                    <i className="fas fa-trash"> </i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
            <strong> <span className="d-lg-none">Total : </span> <span> $</span> {total}</strong>
            </div>
        </div>
    );
}


