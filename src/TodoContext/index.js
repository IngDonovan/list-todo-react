import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider( { children } ) {//la lógica de varios niveles
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
      } = useLocalStorage('TASK_V1',[]);
    
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

    return(      
        <TodoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };