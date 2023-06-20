import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
  loading,
  error,
  searchValue,
  setSearchValue,
  completedTodos,
  totalTodos,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
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
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          
          <CreateTodoButton />
        </>
      );
}

export { AppUI };