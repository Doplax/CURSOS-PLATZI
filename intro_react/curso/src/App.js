import React  from 'react';

import './App.css';
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoList } from './components/TodoList/TodoList'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoItem } from './components/TodoItem/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar curso', completed: false},
  { text: 'Llorar con la llorona', completed: true},
  { text: 'LALALALA', completed: false }
]


function App(props ) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const  [searchValue, setSearchValue] = React.useState('')

  
  
  const completedTodos = todos.filter((todo) => todo.completed == true).length;
  const totalTodos = todos.length

  let searchedTodos = [];

  if (!searchValue.length >=1) {
      searchedTodos = defaultTodos
    } else {
      searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase()      
        const searchText = searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
      })    
     
  }

  return (
    <React.Fragment>
    <TodoCounter
      total={totalTodos}
      completed = {completedTodos}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue = {setSearchValue}
     />
    
    <TodoList> 
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}

        />
      ))}
   
    </TodoList>

    <CreateTodoButton/>
    </React.Fragment>
   );
}

export default App;


