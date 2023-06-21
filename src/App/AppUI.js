import React from 'react';
import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';



function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
        <>
          <TodoTitle />
          <TodoSearch />
          <TodoCounter />
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

          {openModal && (
            <Modal>
              <TodoForm />
              
            </Modal>
          )}
        </>
      );
}

export { AppUI };