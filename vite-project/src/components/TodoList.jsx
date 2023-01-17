import { useState } from "react";



function TodoList() {
    const [list, setList] = useState ([
        {item: 'Walk dog', id: 1},
        {item: 'Wash car', id: 2},
        {item: 'Vacuum', id: 3},
        {item: 'Code stuff', id:4}
    ]);
    return(
            <div>adsf</div>
    )
} 

export default TodoList