import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import CartButton from "./Button";
import { Link } from "react-router-dom";






const Modal = props =>{
    return(
        <ProductConsumer>
            { value => {
                const {modalOpen, closeModal} = value;
                const {img,title,price} = value.modalProduct;


                if (!modalOpen) return null;
                else return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>Item added to the cart</h5>
                                        <img src={img}  alt ="Product Image" className="img-fluid"  />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: <span>$</span> {price}</h5>
                                        <Link to ="/">
                                            <CartButton   nocart onClick={()=>closeModal()}>    
                                                    Continue Shopping
                                            </CartButton>   
                                        </Link>
                                        <Link to="/cart">
                                        <CartButton  nocart  onClick={()=>closeModal()} >
                                            Go to Cart

                                        </CartButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </ModalContainer>  

                );

            }

            }


        </ProductConsumer>
    );
}


const ModalContainer = styled.div
`
position:fixed;
top: 0 ;
bottom:0;
left:0;
right:0;
background:rgba (0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
margin-top:4rem;




#modal {
    background:white;
    border: solid black 2px;
    border-color:black;
}

`;



export default Modal;