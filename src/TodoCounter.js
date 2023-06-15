

function TodoCounter ({total,completed}) {
    return(
      <h1 style={{
        backgroundColor: 'red'
      }}>
        Has completado {completed} de {total} TODOS
      </h1>
    );
  }

  export { TodoCounter };//buena practica, evita que me pueda equivocar -exports nombrados