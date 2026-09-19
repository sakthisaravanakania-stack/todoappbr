import React from 'react'
import { useState } from 'react';

const TodoCard = ({ todo, dispatch, updateStatus, editTodo, deleteTodo }) => {
  
  const [isEdit, setIsEdit] = useState(false);
  const [todoName, setTodoName] = useState(todo.todoName);
  const [todoDesc, setTodoDesc] = useState(todo.todoDesc);

  const handleUpdate = () => {
    editTodo({
      newName: todoName,
      newDesc: todoDesc,
      todoId : todo.id
    })

    setIsEdit(false);
  }
  return (
    <div className='cart'>
      {
        isEdit ? (
          <>
             <input type="text" placeholder='Change your name'
            value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          
            <input type="text" placeholder='Change your desc'
              value={todoDesc} onChange={(e) => setTodoDesc(e.target.value)} />
          </>
        ) : (
            <>
              <h4>{todo.todoName}</h4>
              <h5>{todo.todoDesc}</h5>
            </>
        )}
      
      <div className='cart-status'>
        <label>Status Filter:</label>
          <select value={todo.status}
            onChange={(e) => {
              updateStatus({
                todoStatus: e.target.value,
                todoId: todo.id
              })
            }}
          >
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
        </select>
        
        {
          isEdit && (
            <button onClick={handleUpdate}>Update</button>
          )}
        <div className='btn'>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
    
  )
}

export default TodoCard
