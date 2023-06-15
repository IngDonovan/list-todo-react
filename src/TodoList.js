import './TodoList.css'

function TodoList ({children}) {
    return(
      <section className = 'cont' >
        <ul className = 'ul-box'>
          {children}
        </ul>
      </section>
    );
  }

  export { TodoList };