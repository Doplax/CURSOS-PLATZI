import React from "react";

import "./App.css";
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoForm }from "../TodoForm/TodoForm";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";


function AppUI() {

  const { 
    error,
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos , 
    completedTodos,
    searchValue, 
    setSearchValue,
   } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                >
                </TodoCounter>
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
      </TodoHeader>
        <TodoList>
          {error && <p>Upss... Algo ha salido mal</p>}
          {loading && <p>Se está cargando el contenido...</p>}
          {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <Modal >
          <p>Prueba de teletransporte</p>
        </Modal>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
