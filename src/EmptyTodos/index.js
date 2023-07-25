import React from "react";
import './EmptyTodos.css'

function EmptyTodos({loading}) {

    //   console.log(loading);
    return ( loading ? 
        <p>Crea tu primera Tarea...</p>
        :
        <p>No se encuentra Nada!</p>
    );
}

export { EmptyTodos };