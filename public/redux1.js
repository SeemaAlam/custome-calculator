// 1. if you want to change something, dispatch/send an action.
// 2. action always go to reducer.
// 3. reducer returns a new store.
// 4. store updates view.

// Action  : object.   { type: INC_COUNT, payload: 1 }
// Dispatch: function. take action, give it to reducer.
// Reducer:  function. takes action, AND current store/state. returns new store/state.
// View:     whatever. DOM, console, terminal.

import {createStore} from 'redux';
import { addToDo, decCounter, incCounter } from './store/actions.js';
import {INC_COUNT,ADD_TODO,DEC_COUNT} from './store/actionTypes.js';


class Store{
    constructor(reducer,initState){
        this.reducer=reducer;
        this.state=initState;
    }
    getState(){
    return this.state;
    }

    dispatch(action){
     this.state=this.reducer(this.state,action)
    }
}



const reducer=(state,{type,payload})=>{
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

const init={count:0,todos:[]};

//const store=new Store(reducer,init);

const store=createStore(reducer,init);

console.log(store.getState());

//1. actionTypes
//2. action creatoes
//3. reducer
//4. store

store.dispatch(incCounter(1))

console.log(store.getState());

store.dispatch(decCounter(1))

console.log(store.getState());

store.dispatch(addToDo({id:1,status:false,title:"learn"}));

console.log(store.getState())