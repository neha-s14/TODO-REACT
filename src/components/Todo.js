import React from 'react';
const Todo=({text,setToDos,todo,todos})=>
{
    const deleteHandler=()=>
    {
    setToDos(todos.filter((el) =>
           el.id!== todo.id 
        ))
    }
    const completeHandler=()=>
    {
        setToDos(todos.map(item=>{
            if(item.id===todo.id){
                return{
                    ...todo, completed:!item.completed
            }
            }
            return item
        }))
    }
 return (
<div className="todo">
    <li className={`todo-item ${todo.completed ? "completed": "" }`}>{text}</li>        
<button className="complete-btn" onClick={completeHandler} ><i className="fas fa-check"></i></button>
<button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
</div>
 )   ;
}
export default Todo