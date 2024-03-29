import React from "react";
import './TodoForm.css'

function TodoForm({addTodo,setOpenModal}) {
    //Creamos un estado para nuestro nuevo TODO
    const [newTodoValue, setnewTodoValue] = React.useState('');
    
    //Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
    

    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setnewTodoValue(event.target.value)
    }

    //Función para cerrar el modal
    const onCancel = () => {
        setOpenModal(false);
        
    }

    //Funcion para agregar nuevos Todos
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault()

        // Utilizamos nuestra función para añadir nuestro TODO
        addTodo(newTodoValue)

        //Cerramos el modal
        setOpenModal(false)

        //Resetaemos el formulario
        setnewTodoValue('')
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe Aquí"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >  
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };