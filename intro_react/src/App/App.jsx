import React from "react";

import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { useTodos } from './useTodos';
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodosError } from "../TodosError/TodosError";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";




import "./App.css";


function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        openModal
    } = useTodos();

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
                <TodoList
                    error={error}
                    loading={loading}
                    searchedTodos={searchedTodos}
                    onError={() => <TodosError/>}
                    onLoading={()=> <TodosLoading/>}
                    onEmptyTodos={() => <EmptyTodos/>}
                    render = {todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )}
                    
                />
                    
                {openModal && 
                    <Modal>
                        <TodoForm 
                            addTodo={addTodo} 
                            setOpenModal={setOpenModal}>
                        </TodoForm>
                    </Modal>}
                <CreateTodoButton 
                    setOpenModal={setOpenModal}/>
            </React.Fragment>
    );
}

export { App };
