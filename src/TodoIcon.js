import { ReactComponent as DeleteSVG } from './quit.svg';
import { BsClipboardCheck } from 'react-icons/bs';
import { BsClipboardCheckFill } from 'react-icons/bs';
import './TodoIcon.css';


const iconTypes = {
    "check": <BsClipboardCheck className='Icon-svg'/>,
    "unCheck": <BsClipboardCheckFill className='Icon-svg'/>,
    "delete": <DeleteSVG className='Icon-svg'/>,
};

function TodoIcon({ type , onClick , completed}) {
    
    return (
        <span
            className={`Icon Icon-${type} ${completed ? `Icon-${type}--active` : ''}`}
            onClick = {onClick}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };