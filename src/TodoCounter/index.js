import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    loading,
    completedTodos,
    totalTodos,
    // 
  } = React.useContext(TodoContext);
  // console.log(loading);
  if (!loading) {
    if (totalTodos === 0) {
      return (
        <h2>
          Escribe tu primera tarea
        </h2>
      );
    } else if (totalTodos === completedTodos) {
      return (
        <h2 className='textCounter'>Felicidades, completaste todas las tareas!!!</h2>
      );
    } else {
      return (
        <h2>
          Has completado {completedTodos} de {totalTodos} tareas
        </h2>
      );
    }
  } else {
     return;
 }
}

  export { TodoCounter };//buena practica, evita que me pueda equivocar -exports nombrados

  // return total === completed ? 
  // <h2 className='textCounter'>Felicidades, completaste todas las tareas!!!</h2> 
  // : 
  // <h2>
  // Has completado {completed} de {total} tareas
  // </h2>;