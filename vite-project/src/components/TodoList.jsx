import { useState } from "react";

function TodoList(props) {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([
    { title: "Do thing 1" },
    { title: "Do thing 2" },
    { title: "Do thing 3"}
  ]);
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleCreateItem(){
    const item = {title: title};
    const nextList = [...list, item];
    setList(nextList);
    setTitle('');
  }


  return (
    <div>
      <h2>Practicing to-do list again</h2>
      <input 
      placeholder="List of things"
      value={title}
      onChange={handleTitleChange}
      ></input>
      <button onClick={() => onClick={handleCreateItem}}>
        Create</button>
      {list.map((item, index) => {
        console.log(item);
        return (
          <div
            key={index}
            style={{
              display: "flex",
              width: "200px",
              justifyContent: "space-between",
            }}
          >
            <div>{item.title} </div>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
