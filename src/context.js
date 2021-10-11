import React, { useState } from "react";

import { Data ,Details} from "./data";

const ProductContext = React.createContext();

//Porvider
//Consumer

const ProductsProvider = props => {
    const [products,setProducts] = useState(Data);
    const [details,setDetails] = useState(Details);


    const handleDetail = () =>  {
        console.log("handle details");
    }

    const addToCart = () => {
        console.log("add to cart");
    }

    return(
        <ProductContext.Provider value={{products,details,addToCart:{addToCart},handleDetail:{handleDetail} }}   >
            {props.children}
        </ProductContext.Provider>
    )
}


const  ProductConsumer = ProductContext.Consumer;
 
 
export  {ProductsProvider,ProductConsumer} ;