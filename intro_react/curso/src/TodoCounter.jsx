import React from "react";
import "./TodoCounter.css";


function TodoCounter () {
    return(
        <h2 className="TodoCounter"> Has completado 2 de 3 TODOS </h2>
    )
}



// export default TodoCounter
// No usaremos la linea esta, ya que nos podria dar errores a la hora de nombrar el paquete cuando lo llamamos desde App.js, en lugar de esto, utulizaremos la siguiente linea, para obligarnos a usar un export nombrado:
export { TodoCounter }
