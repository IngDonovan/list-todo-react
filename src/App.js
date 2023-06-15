import React from 'react';
import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



const defaultTodos = [
  { text: 'study React', completed: true },
  { text: 'try React', completed: false },
  { text: 'study Again React', completed: false },
  { text: 'study full React', completed: false },
];

function App() {
  return (
    <>
      <TodoTitle />
      <TodoSearch />
      <TodoCounter completed={16} total= {25} />
    
      <TodoList>
        {defaultTodos.map(todo => (
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
