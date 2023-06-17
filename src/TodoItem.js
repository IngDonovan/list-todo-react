import { DeleteIcon } from './DeleteIcon'
import { CheckIcon } from './CheckIcon'
import './TodoItem.css'

function TodoItem (props) {

    return(
      <li className="TodoItem">
        <label>
          <CheckIcon 
              completed={props.completed}
              onClick={props.onComplete}
          />          
          <p 
            className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
            {props.text}
          </p>
        </label>
        <DeleteIcon 
          onClick = {props.onDelete}  
        />
        
        
      </li>
    );
  }
  export { TodoItem };