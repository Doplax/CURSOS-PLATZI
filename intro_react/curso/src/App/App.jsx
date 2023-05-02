import React, { Children } from "react";
//import { TodoProvider } from '../TodoContext/TodoContext';
//import { AppUI } from "./AppUI";
//import { TodoCounter } from "../TodoCounter/TodoCounter";
//import { TodoSearch } from "../TodoSearch/TodoSearch";



function App() {
    const [state, setState] = React.useState('hola') 
    return(
            <React.Fragment>
                <TodoHeader>
                    <TodoCounter/>
                    <TodoSearch/>                </TodoHeader>
                <TodoHeader/>
                <TodoList>
                    <TodoItem state={state} />
                </TodoList>
            </React.Fragment>

    );
}


function TodoHeader({children}){
    return(
        <header>
            {children}
        </header>
        
    )
}

function TodoCounter(){
    return(<p>TodoCounter</p>)
}


function TodoSearch(){
    return(<p>TodoSearch</p>)
}


function TodoList({children}){
    return(
        <section className="todoList-container">            
                {children}
        </section>
    )
}

function TodoItem( {state} ){
    return (<p>{state}</p>)
}



//function App() {

//    return (
//        <TodoProvider>
//            <AppUI/>
//        </TodoProvider>
//    );
//}

export { App };
