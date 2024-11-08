import { createStore } from "redux";
import { Counter } from "./redusers/Counterreduser";

const store= createStore(Counter)
store.subscribe(()=>{console.log("The state has changed",store.getState())});
// console.log(store.getState(  ));   
store.dispatch({type:'counter/plus'})
store.dispatch({type:'counter/plus'})
store.dispatch({type:'counter/plus'})
store.dispatch({type:'counter/plus'})