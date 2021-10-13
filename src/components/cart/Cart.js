import React from "react";
import Title from "../Title";
import CartColumn from './CartColumn';
import { ProductConsumer } from "../../context";

import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals"; 


const Cart = props => {

    
    return(

        <ProductConsumer>
            { value =>{
                const cart = value.cart ;
                if (cart.length===0) 
                return(
                    <EmptyCart/>

                )

                else return(
                   

                    <React.Fragment>
            
                        <section>
                             <Title  name="your"  title="Cart" />
                        
                        </section>
                        <CartColumn />
                        <CartList  value={value} />
                        <CartTotals  value={value} history={props.history}   />

                    </React.Fragment>

                )
            }
           

            }
             </ProductConsumer>



      
    )
}

export default Cart;