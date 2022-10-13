import React  from 'react';
// import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './TodoCounter'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar curso', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALA', completed: false }
]


function App(props) {
  const  [searchValue, setSearchValue] = React.useState('')
  
  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue = {setSearchValue}
     />
    
    <TodoList> 
      {todos.map(todo => (
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


