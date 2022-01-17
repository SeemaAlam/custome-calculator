

import {INC_COUNT,ADD_TODO,DEC_COUNT} from './actionTypes.js';

const initState={
    count:0,
    todos:[]
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case INC_COUNT:
            return{
                ...state,
                count:state.count+payload
            };

        case DEC_COUNT:
            return{
                ...state,
                count:state.count-payload
            };

        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,payload],
            };

        default:
            return state;

    }
}

