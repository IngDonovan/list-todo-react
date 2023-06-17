import { ReactComponent as DeleteSVG } from './quit.svg';
import { BsClipboardCheck } from 'react-icons/bs';


const iconTypes = {
    "check": <BsClipboardCheck />,
    "delete": <DeleteSVG />,
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