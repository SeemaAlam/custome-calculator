import { INC_COUNT, DEC_COUNT, ADD_TODO} from "./actionTypes.js"


export const incCounter=(data)=>{
 return{
    type:INC_COUNT,payload:data
 }  
}

export const decCounter=(payload)=>{
    return{
       type:DEC_COUNT,payload
    }  
   }

   export const addToDo=(data)=>{
    return{
       type:ADD_TODO,payload:data
    }  
   }