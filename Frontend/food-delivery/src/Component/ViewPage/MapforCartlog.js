import React, { useEffect, useState } from 'react'
import Cartlog from './Cartlog/Cartlog';
import axios from "axios"
import "./MapforCart.css"
import "../ViewPage/Display/DisplayArea.css"
import { useLocation } from 'react-router-dom';

export default function MapforCartlog() {

    const [data,setData]=useState([]);
 const location = useLocation()


// const [filterdata,setfilterdata]=useState((location.state)[1])

 
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

// console.log((location.state))
// console.log("locatiodd")


useEffect(()=>{



      if((location.state)!=null){
        // console.log((location.state).biryaniop)
      
        setData((location.state))
      }
  
  
})




// console.log(("location.state"))

// console.log(data)
// console.log(("location.state"))







  //   let [Biryani,setBiryani]=useState([]);
  //   var bir=[];
  // function tt(){
    
  // let t=0;
  //   data.map(item=>{
  
  //     if(item.foodcategory==="Biryani"){
  //       // setBiryani(...Biryani,item)
  //       bir.push(item);
  //     }
  
  //   })
  //   const lolu=[];
    
  //   lolu.push("biryani")
  //   lolu.push(bir)
  //   // console.log(bir)
  //   // navigate("/filters1" , {state:{biryaniop:bir}})
  //   navigate("/filters1" , {state:lolu})
  // }






//     const location= new useLocation()

//     const [tempd,settempd]= useState([]);
//     const [t2,sett2]=useState([location.state]);
//     // const [t3,sett3]=useState(location.state.express);
//     // console.log(t2)
//     useEffect(()=>{


//       const temp2=()=>{
  

// var ex=t2[0];
// console.log(ex[0])
// // var exx=ex
// //  if(ex[0]==="biryani"){
// var ok=[];
// // ok.push(ex[1])
//   // setData(ex[1]);
//  }


//     // const filterdata=location.state
//     // sett2(location.state)
//     // console.log(filterdata)
//     // try {
//       // var exppresion="biryani"
//       // switch(exppresion){
//       //   case "biryani":
//       //         settempd(t2);
//       //         break;
//       //   default:
//       //         settempd(data);      
        
//       //   }

        
// // if(tempd==="biryani"){
// //   settempd(t2)
// // }
       
      
//     // } catch (error) {
//     //   console.log(error)
//     // }


//     temp2()

//       // }
      
//     },[])

  

    // Object.keys(person).length === 0
// console.log(tempd==="null")



  return (
    <>
      <div className='Display_1'>
       <div className='Display_11'> <h1>Order food online in Lovely Professional University,Phagwara</h1></div>
      <div className='Display_11'>
<div className='Map_1'>
{/* <div className='Display_1'> */}
{/* <div> */}
    {data.map(item=>
<Cartlog  key={item._id} gdata={item}/>
    )}
        </div>
        </div>
        </div>






{/* 
        <div className='Map_1'>


    {
      data.map(item=>
<Cartlog  gdata={item}/>
    )
    }
      


        </div> */}

    </>
  )
}
