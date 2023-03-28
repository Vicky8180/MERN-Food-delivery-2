var initialState=[];
const CartFormation=(state=initialState, action)=>{
    switch(action.type){
        
        case "ADD":

            let temp2=[]
            temp2.push(action.payload)
            // console.log(temp2)
            
            let uniqueArray = temp2.filter((obj, index, self) => self.findIndex(o => o._id === obj._id) === index);

            //  return  [...state,action.payload]; 
             return  [...uniqueArray,uniqueArray]; 
        case "REMOVE":
         var temp = action.payload;
                 console.log(temp)
         const updateedState=state.filter(item=>item._id!== temp)
      state=updateedState
      console.log(updateedState)
        return  state
         default  : return state
    }

}
export default CartFormation