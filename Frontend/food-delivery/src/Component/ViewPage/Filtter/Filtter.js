import React,{useEffect,useState} from 'react'
import "./Filtter.css"
import axios from 'axios';
import {useLocation ,useNavigate} from "react-router-dom"
export default function Filtter() {


// const location = new useLocation()
const navigate= new useNavigate();


  const [data,setData]=useState([]);

  useEffect(()=>{
const temp=async ()=>{
  try {
      const fetcheddata=(await axios.get('http://localhost:5000/api/getdetails')).data
      setData(fetcheddata.response);
  } catch (error) {
      console.log(error)
  }
   
} 
temp()

  },[])
  let [Biryani,setBiryani]=useState([]);
  var bir=[];
function tt(){
  
let t=0;
  data.map(item=>{

    if(item.foodcategory==="Biryani"){
      // setBiryani(...Biryani,item)
      bir.push(item);
    }

  })
  const lolu=[];
  
  lolu.push("biryani")
  lolu.push(bir)
  // console.log(bir)
  // navigate("/filters1" , {state:{biryaniop:bir}})
  navigate("/filters1" , {state:lolu})
}


  return (
   <>
    <div className='Filtter_1'>
        <div className='Filtter_11'>
        <h1>Eat What Makes you Happy</h1>
        </div>
        <div className='Filtter_12'>
        <div className='Filtter_121'>
        <button className='filter_btn' >
        <img className='img' src="https://www.pakladies.com/wp-content/uploads/2013/05/Sindhi-Biryani-Recipe-Pakis.jpg"/>
        <h2>Biryani</h2>
        </button>
        </div>
        <div className='Filtter_121'>
        <button className='filter_btn'>
        <img className='img' src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/burger.jpg"/>
        <h2>Burger</h2>
        </button>
        </div>
        <div className='Filtter_121'>
        <button className='filter_btn'>
        <img className='img' src="https://lh3.googleusercontent.com/asLohKLq0Q6JYKK6Crx9dNYY7bDhez4ePuUXUHJnuJbpifV2hD7HMrZ1XZekmVc9IXXZbyga6OY8G-DRUg51lCWXIQ=w500-rw"/>
        <h2>Thali</h2>
        </button>
        </div>
        <div className='Filtter_121'>
        <button className='filter_btn'>
        <img className='img' src="https://recipes.heart.org/-/media/AHA/Recipe/Recipe-Images/Classic-Margherita-Pizza-with-Whole-Wheat-Pizza-Crust.jpg"/>
        <h2>Pizza</h2>
        </button>
        </div>
        <div className='Filtter_121'>
        <button className='filter_btn'>
        <img className='img' src="https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg"/>
        <h2>Chicken</h2>
        </button>
        </div>
        
        </div>
    </div>
   </>
  )
}
