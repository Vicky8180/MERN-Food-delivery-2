export const AddtoCart=(adding)=>{
    return{
        type:"ADD",
        payload:adding
    }
}
export const RemovetoCart=(removal)=>{
    return{
        type:"REMOVE",
        payload:removal
    }
}