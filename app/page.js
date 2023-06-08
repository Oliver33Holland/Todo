'use client'
import { useState } from "react";
import Todo from "./Todo";
import './globals.css'
const App = () => {
  const [todos, setTodos] = useState([
    { name: 'bob', age: 22 },
    { name: 'oliver', age: 19 },
    { name: 'leon', age: 32 },
  ]);
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
 
//map method
  const handleSubmit = (e) => {
    e.preventDefault();
    let newItems = [...items];
    newItems.push(input);
    setItems(newItems);
    setInput("");
  };

  const deleteItem = (index) => {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  // deleteItem removes items when delete button is pressed, handleSubmit allows for any input to appear
  
  /*then allows the text to stay untill deleted. the items.map allows
  */
  
  return (
    <div>
      <h1>To do lists</h1>

      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      <button type="submit">Add</button>
      </form>
      {items.map((item, index) => (
        <div key={index}>
          <h2>{item}</h2>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}

    </div>
  );
};


export default App;


