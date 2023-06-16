import './CreateTodoButton.css'

function CreateTodoButton () {
    return(
        <button type="button">
            <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 3V53" stroke="#8A8A8A" stroke-width="5" stroke-linecap="round"/>
                <path d="M3 28L53 28" stroke="#8A8A8A" stroke-width="5" stroke-linecap="round"/>
            </svg>
        </button>
    );
  }

  export { CreateTodoButton };