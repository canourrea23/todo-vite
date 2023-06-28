function NewTodo(props) {

    return (
    <div
        key={props.index}
        style={{
        display: "flex",
        width: "200px",
        justifyContent: "space-between",
        }}
    >
        <div>{props.item.title} {props.item.count} </div>{" "}
        <button onClick={() => props.deleteItem(props.index)}>X</button>{" "}
    </div>
    );
}    
    
export {NewTodo}