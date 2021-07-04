import React from 'react';
const  Form =({setInputText,setToDos,todos,inputText,status, setStatus})=>
{
    const InputTextHandler=(e)=>{
    console.log(e.target.value);
    setInputText(e.target.value);
    }
    const SubmitTodoHandler=(e)=>{
        e.preventDefault();
        setToDos([
            ...todos,
            {text: inputText, completed:false, id:Math.random()*1000}
        ]);
        setInputText("");
    }

const statusHandler=(e)=>{
setStatus(e.target.value)
}

    return(
<form>
    <input value ={inputText}onChange={InputTextHandler} type="text" className="todo-input"/>
    <button onClick ={SubmitTodoHandler} className="todo-button" type="submit">
    <i className=" fas fa-plus-square"></i>
    </button>
<div className="select">
<select onChange={statusHandler} name="todos" className="filter-todo">
    <option value="all">All</option>
<option value="Completed">Completed</option>
<option value="Incomplete">Incomplete</option>
</select>
</div>
</form>

    );
}
export default Form