import { useState } from "react";

function TodoList(props) {
  return (
    <div>
      {props.list.map((item, index) => {
        console.log(item);
        return <div key={index}>{item.title} </div>;
      })}
    </div>
  );
}

export default TodoList;
