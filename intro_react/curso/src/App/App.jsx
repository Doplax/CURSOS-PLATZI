import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar curso", completed: false },
    { text: "Llorar con la llorona", completed: true },
    { text: "LALALALA", completed: false },
];

function App() {

//    const localStorageTodos = localStorage.getItem('TODOS_V1');
//    let parsedTodos;


//if (!localStorageTodos) {
//    localStorageTodos.setItem('TODOS_V1', JSON.stringify([]))
//    parsedTodos = [];
//} else {
//    parsedTodos = JSON.stringify(localStorage)
//}

    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState("");

    const completedTodos = todos.filter((todo) => todo.completed === true).length;
    const totalTodos = todos.length;

    let searchedTodos = []; // Guardaremos las coincidencias de busquedasd

    //Logica para filtrar
    if (searchValue.length <= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return todoText.includes(searchText);
        });
    }

    const saveTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos)
        localStorage.setItem('TODOS_V1', stringifiedTodos);
        setTodos(newTodos)
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
        //
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <AppUI
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export { App };
