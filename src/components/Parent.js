import React,{useState} from "react";
import Child from "./Child"


const Parent =()=>{
const [showModal,setShowModal]=useState(false);

    return (
        <div className="Parent">
      <h1>Parent Component</h1>
      <Child showModal={showModal}setShowModal={setShowModal}/>
        </div>
    )
}


export default Parent;