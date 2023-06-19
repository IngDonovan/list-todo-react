import React from 'react';
import { TodoIcon } from '.'

function CheckIcon({ completed, onClick}) {
    
    return (
        <TodoIcon 
            type= "check"
            color={completed ? 'rgb(0, 119, 255)' : 'gray'}
            completed = {completed}
            onClick={onClick}
        />
    );
}

export { CheckIcon };