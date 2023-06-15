import './TodoSearch.css'

function TodoSearch () {
    return(
      <div className="inputContainer">
        <section className="inputContainer-sec">
          <input placeholder="Busca tu TODO'S"/>
        </section>
      </div>
    );
  }

  export { TodoSearch };