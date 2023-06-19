import React from 'react';
import { TodoIcon } from '.'

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