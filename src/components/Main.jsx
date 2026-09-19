import React from 'react'
import { useState } from 'react';
import TodoCard from './TodoCard';

const Main = ({ todos,dispatch, addTodo, updateStatus, editTodo, deleteTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      todoName,
      todoDesc
    })
    setTodoName("");
    setTodoDesc("");
  }

  return (
    <div className='main'>
      <div className='main-content'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Todo Name'
            value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          
          <input type="text" placeholder='Todo Desc'
            value={todoDesc} onChange={(e) => setTodoDesc(e.target.value)} />
          
          <button type='submit'>Add Todo</button>
        </form>

        <div className='main-concept'>
          {
            todos.length === 0 ? (
              <h6>No Todos</h6>
            ) : (
                todos.map((todo) => (
                  < TodoCard key={todo.id}
                    todo={todo}
                    dispatch={dispatch}
                    updateStatus={updateStatus}
                    editTodo={editTodo}
                  deleteTodo={deleteTodo} />    
                ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Main