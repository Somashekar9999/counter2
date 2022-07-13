import "./styles.css";
import React,{useState} from "react"

export default function App(){
const[Count,setCount]=useState(e)
  return<div className="App">

    <h1>Counter APP</h1>
    <h2>{Count}</h2>
   <button onclick={()=>setCount(Count+1)}>Increment</button>
    <button onclick={()=>setCount(Count-1)}
    disabled={Count ===0}>Decrement</button>
   <button onclick={()=>setCount(0)}
    disabled={Count==0}>Reset</button>
 </div>;
}