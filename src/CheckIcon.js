import React from 'react';
import { TodoIcon } from './TodoIcon'

function CheckIcon({ completed, onClick}) {
    return (
        <TodoIcon 
            type="check"
            color="gray"
            completed = {completed}
            onClick={onClick}
        />
    );
}

export { CheckIcon };