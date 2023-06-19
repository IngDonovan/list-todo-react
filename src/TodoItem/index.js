import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { CheckIcon } from '../TodoIcon/CheckIcon'
import './TodoItem.css'

function TodoItem (props) {

    return(
      <li className="TodoItem">
        <CheckIcon 
            completed={props.completed}
            onClick={props.onComplete}
        />          
        <p 
          className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
          {props.text}
        </p>
        
        <DeleteIcon 
          onClick = {props.onDelete}  
        />
        
        
      </li>
    );
  }
  export { TodoItem };