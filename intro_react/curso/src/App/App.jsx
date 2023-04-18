import React from "react";
import { AppUI } from "./AppUI";

//const defaultTodos = [
//    { text: "Cortar cebolla", completed: true },
//    { text: "Tomar curso", completed: false },
//    { text: "Llorar con la llorona", completed: true },
//    { text: "LALALALA", completed: false },
//];

function useLocalStorage(itemName, initialValue) {
    const localStorageItem  = localStorage.getItem(itemName)
    let parsedItem;

    if (!localStorage) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
    } else {
        parsedItem = JSON.parse(localStorageItem );
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem)
        setItem(newItem);
    }

    return [ item , saveItem ]
}


function App() {


    const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
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
