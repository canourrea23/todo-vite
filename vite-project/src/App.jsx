import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TodoList from "./components/TodoList";

//build component that can add todo items
//input field *
//create button *
//render list of items *
//delete items
//create delete button for items
// create function deleteButton
function App() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([
    { title: "Walk dog" },
    { title: "Wash car" },
    { title: "Vacuum" },
    { title: "Code stuff" },
  ]);
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleCreateItem() {
    console.log("click");
    const item = { title: title };
    const nextList = [...list, item];
    setList(nextList);
    setTitle("");
  }
  function deleteItem(index) {
    const nextList = list.filter((item, currentIndex) => index != currentIndex);
    setList(nextList);
  }
  const totalCount = () => {
    commerce.count.retrieve().then((count) => {
    setCount(count);
    })
  }

  const [count, setCount] = useState({})
  console.log(useState, 'hello')
  return (
    <div>
      <input
        placeholder="enter todo"
        type="text"
        value={title}
        onChange={handleTitleChange}
      ></input>
      <button onClick={() => setCount({[title]:(count[title] ?? 0) + 1})}> + </button> 
      {/* <button onChange={handleCountChange}> + </button> */}
      <span>{count[title] ?? 0 }</span>
      <button onClick={() => setCount(count - 1)}> - </button>
      <button disabled={title === ""} onClick={handleCreateItem}>
        Create
      </button>

      //map of count 
      {list.map((item, index) => {
        // console.log(item);
        return (
          <div
            key={index}
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-between",
            }}
          >
            <div>{item.title}{count[item.title]}</div>{" "}
            <button onClick={() => deleteItem(index)}>X</button>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default App;
