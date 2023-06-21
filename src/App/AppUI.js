import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';


function AppUI({

}) {
    return (
        <>
          <TodoTitle />
          <TodoSearch 
            // searchValue = {searchValue}
            // setSearchValue = {setSearchValue}
          />
          <TodoCounter 
            // completed={completedTodos} 
            // total= {totalTodos}
            // load = {loading}
          />
          <TodoContext.Consumer>
            {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
            })=>(
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
            )}
          </TodoContext.Consumer>          
          <CreateTodoButton />
        </>
      );
}

export { AppUI };