import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import React from 'react';
import { useState } from 'react';
import {Todo} from './todo.model';

const App: React.FC = () => { 
  
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {

    if (text.trim()){
    setTodos((prevTodos) => [...prevTodos, {id: Math.random().toString(), text: text}])
  

    }
  }
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }
  return (<>
  <div className='App'>
   
    <NewTodo onAddTodo={todoAddHandler}></NewTodo>
  <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
  TypeScript + React</div>
  </>)
}
export default App;
