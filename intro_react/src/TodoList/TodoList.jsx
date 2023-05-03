import './TodoList.css'

function TodoList(props) {


    return(
        <section className="className-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            {(!props.loading && !props?.searchedTodos?.length) && props.onEmptyTodos()}
            
            {(props.totalTodos && !props.searchedTodos.lenght) && props.onEmptySearchResults()}

            <ul>
                {props.TodoList}
            </ul>
        </section>
    )
}

export {TodoList };