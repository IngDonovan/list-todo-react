import './TodoList.css'

function TodoList ({children}) {
    return(
      <section className = 'container' >
        <ul className = 'list'>
          {children}
        </ul>
      </section>
    );
  }

  export { TodoList };