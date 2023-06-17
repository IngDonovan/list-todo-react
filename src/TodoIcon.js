import { ReactComponent as DeleteSVG } from './quit.svg';

const iconTypes = {
    // "check": <CheckSVG />,
    "delete": <DeleteSVG />,
};

function TodoIcon({ type , onClick }) {
    return (
        <span
            className={`Icon Icon-${type}`}
            onClick = {onClick}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };