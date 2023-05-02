import React from "react";
import './TodoList.css'

function TodoList(props) {

    
    return(
        
        <section className="className-container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(props.emptyTodos && !searchedTodos.lenght) && emptyTodos.onEmptyTodos()}

        {se}
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList };