import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form className='TodoForm-Container'
            onSubmit={(event)=>{
                event.preventDefault();//evita que se recargue la pagina
            }}>
            <label>Escribe tu Tarea</label>
            <textarea 
                placeholder='Estudiar con mucho esfuerzo...'
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    type="" 
                    className='TodoForm-button TFB--cancel'>
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