import './TodoItem.css'

function TodoItem (props) {

    return(
      <li className="TodoItem">
        <label>
          <input type="checkbox" checked={props.completed} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}/>
          <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
          </p>
        </label>
        <span className="Icon Icon-delete">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L2 2" stroke="#8A8A8A" stroke-width="3" stroke-linecap="round"/>
            <path d="M12 2L2 12" stroke="#8A8A8A" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </span>
      </li>
    );
  }
  export { TodoItem };