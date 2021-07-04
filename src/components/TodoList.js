import React from 'react';
import Todo from './Todo';
const TodoList =({todos,setToDos,filteredTodos})=>{
 return(
     <div className="todo-container">
     <ul className="todo-list">{
       filteredTodos.map(todo =>
        (
          <Todo text={todo.text} key={todo.id} todos={todos} todo={todo} setToDos={setToDos}
          filteredTodos={filteredTodos}/>
        ))
     }
</ul>
   </div>
 )   
}
export default TodoList