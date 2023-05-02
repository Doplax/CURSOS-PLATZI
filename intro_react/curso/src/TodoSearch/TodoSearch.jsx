import React from "react"
import './TodoSearch.css'



function TodoSearch ( { searchValue, setSearchValue }){
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value); // Para ser mas especifico en el valor que buscamos en la consola
        setSearchValue(event.target.value);
    }

    return(
        <>
        <input 
            className="TodoSearch" 
            placeholder='Cebolla'
            value={searchValue}
            onChange={onSearchValueChange}

        />
        </>
    )
}

export { TodoSearch }

