import React, { useEffect, useState } from 'react'

import "./Order.css"
export default function Order() {



    const[quantity,setquantity]= useState(0);

    function quantitysettingplus(){
      setquantity(quantity+1);
    }
    
    function quantitysettingminus(){
      if(quantity>1){
      setquantity(quantity-1);}
    }
const[tprice, settprice]=useState(0.0);
    function totalprice(){
        settprice(quantity*20)
    }

    useEffect(()=>{
      totalprice();

    })




  const hitting_endpoint = async (event) => {
    event.preventDefault();
     await fetch("http://localhost:5000/api/orderpost", {
      method: "post",
      headers: {

        'Content-Type':'application/json'
      },
      body:JSON.stringify({

        foodname:"anoop",
        foodprice:1000,
        foodcategory:"bh",
        foodrating:4.5,
        foodimg:"frjfnrnfvnifnvjr",
        fooddiscription:"rfhrhr",
        username:"vicky yadav",
        userphone:64737348483,
        useremail:"vayadav99x1@gmail.com",
        quantity:quantity,
        tprice:tprice,

      

       
      })
    })

  
    alert("Order succecfully")

  
  }







  return (
    <>

       <div className='Order_main'>
    
<div className='Order_main_2'>
       <div className='Order_1'>
       <img className='order_img' src="https://www.pakladies.com/wp-content/uploads/2013/05/Sindhi-Biryani-Recipe-Pakis.jpg" alt ="Not found"/>
    
            <h2>Food Name</h2>   
            <button>Add to cart</button>
            <button>Check Out</button>

        </div>
        
       <div className='Order_2'>
       <h2>Food Nanme</h2> 
       <h6>

Dum: Parboiled rice and raw marinated meat are placed into a thick-bottomed pot, sealed with dough and left to cook on low heat for hours.<br/>
Pukka: Rice and meat are cooked separately, then combined and steamed.<br/>
 </h6>
       <div>RATIng</div>
        <h3>price</h3> 
          <div className='div_quantity2'><button onClick={quantitysettingminus}>-</button><div>{quantity}</div><button   onClick={quantitysettingplus}>+</button></div>
          <h3>${tprice}</h3>
          <button onClick={hitting_endpoint}>Order Now</button>


        </div>
        </div>
        <div className='Order_main_3'>You make also like </div>
       </div>
       
    </>
  )
}
