import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
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
            {loading && <p>Estamos Cargando..</p>}
            {error && <p>Hubo un error de Carga..</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer tarea!</p>}
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