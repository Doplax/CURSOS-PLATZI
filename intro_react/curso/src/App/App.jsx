import React from "react";
import { TodoProvider } from '../TodoContext/TodoContext';
import { AppUI } from "./AppUI";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";


function App() {

    return (
        <TodoProvider>
            <AppUI/>
        </TodoProvider>
    );
}

export { App };
