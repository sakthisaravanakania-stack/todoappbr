import React from 'react'
import { useReducer } from 'react';
import  axios  from 'axios';
import { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Reducer from "./reducers/Reducer";
import "./App.css"

const App = () => {
  const initaialState = {
    todos: [],
    filter: "all"
  }
  const [state, dispatch] = useReducer(Reducer, initaialState)

  const getTodos = async () => {
    try {
      const response = await axios.get("/users")

      dispatch({
        type: "GET_TODOS",
        payload: response.data
      })
    } catch(error) {
      console.log(error);
    }
  }

  const addTodo = async (todoData) => {
    try {
      const response = await axios.post("/users", {
        todoName: todoData.todoName,
        todoDesc: todoData.todoDesc,
        status:"Not Completed"
      })
      dispatch({
        type: "ADD_TODO",
        payload: response.data
      })
    } catch(error) {
    console.log(error);
    }
  }

  const updateStatus = async (todoData) => {
    try {
      await axios.put(`/users/${todoData.todoId}`, {
       status: todoData.todoStatus,
      })
      dispatch({
        type: "UPDATE_STATUS",
        payload:todoData
      })
    } catch (error) {
      console.log(error);
   }
  }

  const editTodo = async (todoData) => {
    try {
      await axios.put(`/users/${todoData.todoId}`, {
        todoName: todoData.newName,
        todoDesc: todoData.newDesc,        
      })
      dispatch({
        type: "EDIT_TODO",
        payload: todoData,
      }) 
    } catch (error) {
      console.log(error);
    }
  }

  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`/users/${todoId}`, {  
      })
      dispatch({
        type: "DELETE_TODO",
        payload:todoId
      })
    } catch (error) {
      console.log(error);
    }
  }

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "all")
      return true;
    return todo.status === state.filter
  })

  useEffect(() => {
    getTodos();
  },[])
  return (
    <>
      <div className='app'>
        <Header dispatch={dispatch} filter={state.filter} />
        
        <Main todos={filteredTodos}
          dispatch={dispatch}
          addTodo={addTodo}
          updateStatus={updateStatus}
          editTodo={editTodo}
         deleteTodo={deleteTodo} />
    </div>
    </>
  )
}

export default App