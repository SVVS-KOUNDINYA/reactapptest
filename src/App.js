import React, {useState} from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([{id: 1,name: "todo", complete: false}])
  return (
    <>
      <ToDoList todos={todos}/>
      <input type = "text"/>
      <button>Add ToDo</button>
      <button>clear All</button>
      <div>0 left ToDo</div>
    </>
  )
}

export default App;
