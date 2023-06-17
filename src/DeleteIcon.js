import React from 'react';
import { TodoIcon } from './TodoIcon'

function DeleteIcon({onClick}) {
    return (
        <TodoIcon 
            type="delete"
            color="gray"
            onClick={onClick}
        />
    );
}

export { DeleteIcon };