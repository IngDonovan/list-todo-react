import React from "react";
import { TodoContext } from '../TodoContext';
import './EmptyTodos.css'

function EmptyTodos() {
    const {
        loading,
      } = React.useContext(TodoContext);
    //   console.log(loading);
    return ( loading ? 
        <p>Crea tu primera Tarea...</p>
        :
        <p>No se encuentra Nada!</p>
    );
}

export { EmptyTodos };