import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import Item from "../Components/Item/Item";
import Cartitems from "../Components/Cartitems/Cartitems";
export const ShopContext=createContext(null);
const getCart=()=>{
    let cart={};
    for(let j=0;j<all_product.length+1;j++ ){
        cart[j]=0;
    }
    
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartitem,setcartoitem]=useState(getCart());


const addtocart= (itemid)=>{
    setcartoitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    console.log(cartitem);
}
const removecart= (itemid)=>{
    setcartoitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}
const calculateTotalAmount = () => {
    let total = 0;
    for (const i in cartitem) {
      if (cartitem[i] > 0) {
        let info = all_product.find((prod) => prod.id === Number(i));
        if (info) {
          total += info.new_price * cartitem[i];
        }
      }
    }
    return total;
  };
  const gettotalcartitem=()=>{
    let totalitem=0;
    for(const i in cartitem){
        if(cartitem[i]>0){
            totalitem+=cartitem[i]
        }
    }
    return totalitem;
  }
  
  const contextValue={gettotalcartitem,calculateTotalAmount,all_product,cartitem,addtocart,removecart};

return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)


}
export default ShopContextProvider;