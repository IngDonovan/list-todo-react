import './TodoItem.css'

function TodoItem (props) {
    return(
      <li>
        <span id='check'>V</span>
        <p>{props.text}</p>
        <span id='erase'>X</span>
      </li>
    );
  }
  export { TodoItem };