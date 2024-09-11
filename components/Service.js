import axios from "axios";

import { useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";
export const initial_state={
    post:[]
}
const Service = ()=>{
    const [state,dispatch] = useReducer(Reducer,initial_state);
    function a(id){
        axios.get(`https://jsonplaceholder.typicode.com/posts/`+`${id}`).then((res)=>{
            dispatch({type:"SUCCESS",payload:res.data})
        }).catch(e=>{
            dispatch({type:"ERROR"})
        })
    }
    return [state,a]
}

export default Service;