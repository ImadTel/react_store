import React, { useEffect, useState } from "react";

import { Data ,Details} from "./data";

const ProductContext = React.createContext();

//Porvider
//Consumer

const ProductsProvider = props => {
    const [products,setProducts] = useState([]);
    const [details,setDetails] = useState(Details);
    const [cart,setCart] = useState([])
    const [modalOpen,setModelOpen] = useState(false);
    const [modalProduct,setModalProduct] = useState(Details); 





    const handleDetail = (id) =>  {
       const product = getItem(id);
       setDetails(product);
    }

 
    const addToCart = id =>{
        let tempProducts = [...products];
        const product = tempProducts[tempProducts.indexOf(getItem(id))];
        product.count=1;
        product.incart=true;
        product.total = product.count * product.price;

      

        setProducts(tempProducts);
        setCart([...cart,product]);

    }



    const getItem = id =>{
        const product = products.find(item => item.id===id);
        return product;

    }

    const openModal = id =>{
        const product = getItem(id);
        setModalProduct(product);
        setModelOpen(true);

    }

    const closeModal = ()=> {
        setModelOpen(false);
    }




    const setProdInit = () =>{
        let tempProducts = [];
        Data.forEach(item =>{
            const tempItem = {...item};
            tempProducts = [...tempProducts,tempItem];
        });

        setProducts(tempProducts);
        const tempDetail = {...Details};
        setDetails(tempDetail);
    }





    useEffect(()=>{
        
            setProdInit();
        
                             

             console.log(cart);
             console.log(products);


    }, [])















    return(
        <ProductContext.Provider value={{products,details ,modalProduct,modalOpen,addToCart,handleDetail,openModal,closeModal }}   >
            {props.children}
        </ProductContext.Provider>
    )
}


const  ProductConsumer = ProductContext.Consumer;
 
 
export  {ProductsProvider,ProductConsumer} ;