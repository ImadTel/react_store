import React from "react";
import CartButton from "../Button";
import { Link } from "react-router-dom";


export default function CartTotals({value}){
       const { clearCart,cartSubTotal,cartTax,cartTotal} = value;
    return(
        <div className="container-fluid">
            <div className="row mr-5 d-flex justify-content-end align-items-end">
                <div className="col-sm-10 col-md-4 col-lg-2 py-3 text-right">
                    <Link to="/">
                    <button   className="btn px-3 mx-5 py-2  my-3 btn-outline-danger text-uppercase" type="button" onClick={()=>clearCart()}> Clear Cart </button>
                    </Link>
                    <h3 className="mx-5"> Subtotal :  <strong>$ <span> {cartSubTotal}</span></strong> </h3>
                    <h3  className="mx-5"> Tax : <strong>$ <span> {cartTax}</span> </strong></h3>
                    <h3  className="mx-5"> Total : <strong>$<span> {cartTotal} </span> </strong>  </h3>
                </div>
            </div>
        </div>
    )
}