import React from 'react';
import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



const defaultTodos = [
  { text: 'study React', completed: false },
  { text: 'try React', completed: false },
  { text: 'study Again React', completed: true },
  { text: 'study full React', completed: true },
  { text: 'Enjoy React', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('buscando ' + searchValue);

  const completedTodos = todos.filter( todo => !!todo.completed).length;//doble negación para convertirlo si o si a boolean
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.includes(searchValue);
    }
  );

  return (
    <>
      <TodoTitle />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoCounter 
        completed={completedTodos} 
        total= {totalTodos} 
      />
    
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
