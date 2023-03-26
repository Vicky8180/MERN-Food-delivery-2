import React,{useState} from 'react'
import "./Cart.css"
export default function Cart() {
    
    const[quantity,setquantity]= useState(0);

    function quantitysettingplus(){
      setquantity(quantity+1);
    }
    
    function quantitysettingminus(){
      if(quantity>1){
      setquantity(quantity-1);}
    }
  return (
    <>
<div className='cart_main'>

<div className='div_1'>
    <h1>MY SHOPPING CART </h1>
</div>


<div className='div_2'>
<div className='div_2L'>

<div className='div_21'>
<div  className='cart_img'><img   className='mk' src="https://www.pakladies.com/wp-content/uploads/2013/05/Sindhi-Biryani-Recipe-Pakis.jpg" alt="Not found"/>
</div>
<div className='cart_right'>
    <div className='h1_foodname'>Biryani hydrabadi</div>
    <div className='h1_foodcategory'>Biryani</div>
    <div className='div_quantity'><button onClick={quantitysettingminus}>-</button><div>{quantity}</div><button   onClick={quantitysettingplus}>+</button></div>

    <div className='div_cancel'>    <h3 className='h1_foodprice'>$19,500</h3>
    <button className='btn_cancel'>Cancel logo</button>
    </div>
</div>
</div>
<div className='div_21'>
<div  className='cart_img'><img   className='mk' src="https://www.pakladies.com/wp-content/uploads/2013/05/Sindhi-Biryani-Recipe-Pakis.jpg" alt="Not found"/>
</div>
<div className='cart_right'>
    <h1 className='h1_foodname'>Biryani hydrabadi</h1>
    <h3 className='h1_foodcategory'>Biryani</h3>
    <div className='div_quantity'><button onClick={quantitysettingminus}>-</button><div>{quantity}</div><button   onClick={quantitysettingplus}>+</button></div>

    <div className='div_cancel'>    <h3 className='h1_foodprice'>$19,500</h3>
    <button className='btn_cancel'>Cancel logo</button>
    </div>
</div>
</div>
<div className='div_21'>
<div  className='cart_img'><img   className='mk' src="https://www.pakladies.com/wp-content/uploads/2013/05/Sindhi-Biryani-Recipe-Pakis.jpg" alt="Not found"/>
</div>
<div className='cart_right'>
    <div className='h1_foodname'>Biryani hydrabadi</div>
    <h3 className='h1_foodcategory'>Biryani</h3>
    <div className='div_quantity'><button onClick={quantitysettingminus}>-</button><div>{quantity}</div><button   onClick={quantitysettingplus}>+</button></div>

    <div className='div_cancel'>    <h3 className='h1_foodprice'>$19,500</h3>
    <button className='btn_cancel'>Cancel logo</button>
    </div>
</div>
</div>
<div className='div_21'>
<div  className='cart_img'><img   className='mk' src="https://www.pakladies.com/wp-content/uploads/2013/05/Sindhi-Biryani-Recipe-Pakis.jpg" alt="Not found"/>
</div>
<div className='cart_right'>
    <h1 className='h1_foodname'>Biryani hydrabadi</h1>
    <h3 className='h1_foodcategory'>Biryani</h3>
    <div className='div_quantity'><button onClick={quantitysettingminus}>-</button><div>{quantity}</div><button   onClick={quantitysettingplus}>+</button></div>

    <div className='div_cancel'>    <h3 className='h1_foodprice'>$19,500</h3>
    <button className='btn_cancel'>Cancel logo</button>
    </div>
</div>
</div>

</div>
<div className='div_2R'>
<div className='div_payment1'>Payment</div>
<hr/>
<div  className='div_payment2'> 
<div>EXTRA 15% OFF</div>
<div>-$1500</div>


</div>
<div  className='div_payment3'> 
<div>SUBTOTAL</div>
<div>$34500</div>


</div>
<div  className='div_payment3'> 
<div>SHIPPING COST</div>
<div>$0</div>


</div>
<div  className='div_payment3'> 
<div>ORDER DISCOUNT</div>
<div>-$1500</div>


</div>
<hr/>
<div  className='div_payment6'> 
<div>GRAND TOTAL</div>
<div>$12900</div>


</div>
<button className='btn_checkout'>CHECKOUT</button>


</div>
</div>

</div>  </>
  )
}
