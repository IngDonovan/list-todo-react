import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=>{
        event.preventDefault();//evita que se recargue la pagina
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = ()=>{
        setOpenModal(false);
    };

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };
    return (
        <form className='TodoForm-Container'
            onSubmit={onSubmit}>
            <label>Escribe tu Tarea</label>
            <textarea 
                placeholder='Estudiar con mucho esfuerzo...'
                value = {newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    type="button" 
                    className='TodoForm-button TFB--cancel'
                    onClick={onCancel}
                    
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    className='TodoForm-button TFB--add'>
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };