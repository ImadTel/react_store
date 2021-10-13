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
    const [cartSubTotal,setCartSubTotal] = useState(0);
    const [cartTax,setCartTax] = useState(0);
    const [cartTotal,setCartTotal] = useState(0);





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

        const sub= cartSubTotal + product.total;
        const tax = cartTax + product.total * 0.15;

        setCartTax(tax);
        setCartSubTotal(sub);
       // const total = tax + sub
       // setCartTotal(total);


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



    useEffect(()=>{  setProdInit();}, [])



    useEffect(()=>{
        const tax =  cartSubTotal*0.15;
        setCartTax(tax);
        const total = cartSubTotal+ cartSubTotal*0.15;
        setCartTotal(total);}
        , [cartSubTotal])


    const increment = id =>{
        let tempCart = [...cart];
        let item = tempCart[tempCart.indexOf(getItem(id))];
      
        item.count+=1;
        item.total =  item.total + item.price;
        setCart([...tempCart]);
        const sub = cartSubTotal + item.price;

        setCartSubTotal(sub);
  


    }

    const decrement = id =>{
        let tempCart = [...cart];
        let product = tempCart[tempCart.indexOf(getItem(id))];


        if (product.count===1)  removeProduct(id);
        else if(product.count>1)
        {   
          product.count-=1;
          product.total = product.count * product.price;
          setCart([...tempCart]);
          const sub= cartSubTotal - product.price;
          setCartSubTotal(sub);
     

        }
        
    }


    const removeProduct = id  =>{
        let tempProducts = [...products];
        const product=getItem(id)
        let index = tempProducts.indexOf(product);
        tempProducts[index].incart=false;
        tempProducts[index].count=0;
        tempProducts[index].total=0;

        setProducts([...tempProducts]);

        const sub= cartSubTotal - product.total;

        setCartSubTotal(sub);

        let tempCart = [...cart];
        index = tempCart.indexOf(product);
        tempCart.splice(index,1);
        setCart([...tempCart]);
        
    }


    const clearCart = ()=>{
       let inProducts = [...products];
        inProducts.forEach(element => {
            if (element.incart) {
                element.incart=false;
                element.count=0;
                element.total = 0;
        }});

       setProducts([...inProducts]);

       setCart([]);
       setCartSubTotal(0);
    }


    return(
        <ProductContext.Provider value={{products,details ,modalProduct,modalOpen,cartSubTotal,cart,cartTax,cartTotal
        ,increment,decrement,clearCart,removeProduct,addToCart,handleDetail,openModal,closeModal }}   >
            {props.children}
        </ProductContext.Provider>
    )
}


const  ProductConsumer = ProductContext.Consumer;
 
 
export  {ProductsProvider,ProductConsumer} ;