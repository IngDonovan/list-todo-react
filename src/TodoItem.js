import './TodoItem.css'

function TodoItem (props) {

    return(
      <li className="TodoItem">
        <label>
          <input 
            type="checkbox" 
            checked={props.completed} 
            className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
            onClick={props.onComplete}
            />
          
          <p 
            className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
            {props.text}
          </p>
        </label>
        <span 
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L2 2" stroke="#8A8A8A" strokeWidth="3" strokeLinecap="round"/>
            <path d="M12 2L2 12" stroke="#8A8A8A" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </span>
      </li>
    );
  }
  export { TodoItem };