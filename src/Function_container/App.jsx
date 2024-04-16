import FunctionApp from "./FunctionApp";
import AddToDo from "./AddToDo";
import "../assets/App.css";
import Container from "./Container";
import { useState } from "react";
function App(event) {
  const data=[{id:"1",name:"avdsf"},{id:"2",name:"safsdf"},{id:"3",name:"sdfdsg"},{id:"4",name:"hueueueiu"}];
  let newState=event.target.value;
  let useoneState=useState("hi i love you",newState);
  let haveNow=useoneState[0];
  
  return (
    <center className="todo-container">
      <FunctionApp/>
      {data.map((d)=>
      
      <>
      <h1>{d.id}</h1>
          <Container><AddToDo key={d.key} id={d.id} d={d} handelcare={(event)=>console.log( `${d.name}`)}/></Container>
          </> )}
      
    </center>
  );
}


export default App;
