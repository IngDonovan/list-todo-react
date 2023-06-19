import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// const defaultTodos = [
//   { text: 'Primera Tarea', completed: false },
//   { text: 'Second Task', completed: false },
//   { text: 'Terzo Compito', completed: true },
//   { text: 'Quartus Opus', completed: true },
//   { text: 'Cinquième Tâche', completed: false },
// ];
// localStorage.setItem('TASK_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TASK_V1');


function App() {
  
  const [todos, saveTodos] = useLocalStorage('TASK_V1',[]);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter( todo => !!todo.completed).length;//doble negación para convertirlo si o si a boolean
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    
    />
  );
  
}

export default App;
