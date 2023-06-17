import './TodoCounter.css';

function TodoCounter ({total,completed}) {
    return(
      total == completed ?
      <h2 className='textCounter'>Felicidades, completastes las tareas!!!</h2>
      : 
      <h2>
        Has completado {completed} de {total} Tareas
      </h2>
    );
  }

  export { TodoCounter };//buena practica, evita que me pueda equivocar -exports nombrados