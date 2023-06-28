import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";
import { SignUp } from "./components/SignUp";


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

  // function handleIncreament() {
  //   const newCount = count + 1
  //   setCount(newCount)
  //   onChange(newCount)
  // }

  // function handleDecrement() {
  //   const newCount = count -1
  //   setCount(newCount)
  //   onChange(newCount)
  // }
  function handleCreateItem() {
    // console.log("click");
    const item = { title: title, count };
    const nextList = [...list, item];
    setList(nextList);
    setTitle("");
    console.log(nextList);
  }

  function deleteItem(index) {
    const nextList = list.filter((item, currentIndex) => index != currentIndex);
    setList(nextList);
  }

  const [count, setCount] = useState(0);
  return (
    <div>
      <input
        placeholder="enter todo"
        type="text"
        value={title}
        onChange={handleTitleChange}
      ></input>
      <button onClick={() => setCount(count + 1)}> + </button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}> - </button>
      <button disabled={title === ""} onClick={handleCreateItem}>
        Create
      </button>
      {list.map((item, index) => {
        return <NewTodo item={item} index={index} deleteItem={deleteItem} />;
      })}
      <TodoList />
      <Login email="email" password={"password"} submit={() => null} />
      <ForgotPassword email={"email"} submit={() => null} />
      <SignUp
        email={"email"}
        password={"password"}
        confirmPassword={"confirmPassword"}
        submit={() => null}
      />
    </div>
  );
}

export default App;
