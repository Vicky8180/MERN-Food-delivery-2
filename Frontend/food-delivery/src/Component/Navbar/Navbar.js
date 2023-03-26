import React from 'react'
import "./Navbar.css"
import {useNavigate} from "react-router-dom"


export default function Navbar() {

const navigate= useNavigate();

  function history(){

    navigate("/cart")
  }
  return (
    <div>
      <div className='Navbar_1'>
      
<div className='Navbar_2'><img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" height={45} width={230}/></div>
  <div className='Navbar_21'>   
<div> name</div>
<div className='Navbar_211'> Sing-in</div>
<div className='Navbar_211'>Sing-up</div>
<div className='Navbar_211'><button onClick={history}><img src ="https://www.seekpng.com/png/detail/261-2611186_broadcast-mall-shopping-cart-comments-shopping-cart-icon.png" width={60} height={40} /></button></div>
</div>
      </div>
    </div>
  )
}
