import FunctionApp from "./FunctionApp";
import AddToDo from "./AddToDo";
import "../assets/App.css";
import Container from "./Container";
import { useState } from "react";
function App(event) {
  const data = [
    "salad","pokemon","hi","by"
  ];
  let [food,setfood]=useState([data])

 const onKeyDown =(event)=>{
  if(event.key==="Enter"){
    let newFood=event.target.value;
    let newitems=[...food+newFood]
    setfood(newitems);
    console.log("food added "+ newitems);

  }
 }

  return (
    <center className="todo-container">
      <FunctionApp />
      {data.map((d, id) => {
        return (
          <div key={id}>
            <h1>{d.id}</h1>
            <Container>
              <AddToDo
                key={d.key}
                id={d.id}
               
                const handelcare={onKeyDown}
              />
            </Container>
          </div>
        );
      })}
    </center>
  );
}

export default App;
