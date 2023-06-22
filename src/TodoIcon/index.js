import { ReactComponent as DeleteSVG } from './quit.svg';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsClipboardCheckFill } from 'react-icons/bs';
import './TodoIcon.css';


const iconTypes = {
    "check": (color) => <BsCheckCircleFill className='Icon-svg' fill={color}/>,
    // "unCheck": (color) => <BsClipboardCheckFill className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color}/>,
};

function TodoIcon({ type , color , completed, onClick}) {
    
    return (
        <span
            className={`Icon Icon-${type} ${completed ? `Icon-${type}--active` : ''}`}
            onClick = {onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };