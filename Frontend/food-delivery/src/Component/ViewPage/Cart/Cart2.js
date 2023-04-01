import { useState } from "react";
import React from 'react'
import "./Cart.css"
import { useSelector, useDispatch } from 'react-redux';
import { AddtoCart,RemovetoCart } from "../../../action";
export default function Cart2(props) {


    const dispatch=useDispatch();
    const[quantity,setquantity]= useState(0);
    const item=props.data;
    // console.log(item)
    var sendData= props.senddata


    function quantitysettingplus(props){

console.log("yahapar")
console.log(quantity)

        setquantity(quantity+1);
        sendData(item.foodprice)
      }
    
    
      
      function quantitysettingminus(props){
        if(quantity>1){
          // totalsum= totalsum-quantity*props
        //   settotalsum(totalsum-props)
        sendData(-item.foodprice)

        setquantity(quantity-1);}
      }
  return (
   <>
     <div className='div_21'>
<div  className='cart_img'><img   className='mk' src={item.foodimg} alt="Not found"/>
</div>
<div className='cart_right'>
    <div className='h1_foodname'>{item.foodname}</div>
    <div className='h1_foodcategory'>{item.foodcategory}</div>
    <div className='div_quantity'><button onClick={()=>{quantitysettingminus(item.foodprice)}}>-</button><div>{quantity}</div><button   onClick={()=>{quantitysettingplus(item.foodprice)}}>+</button></div>

    <div className='div_cancel'>    <h3 className='h1_foodprice'>${item.foodprice}</h3>
    <button className='btn_cancel' onClick={()=>{
    const t=quantity*item.foodprice;
    sendData(-t);setquantity(1)
    dispatch(RemovetoCart(item._id))}}>Cancel logo</button>
    </div>
</div>
</div>
   </>
  )
}
