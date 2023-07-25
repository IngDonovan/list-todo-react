import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
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

function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo, 
    setOpenModal,
    completedTodos,
  } = useTodos();

  return (
        <>
          <TodoHeader>
            <TodoTitle />
            <TodoSearch 
              searchValue = {searchValue}
              setSearchValue = {setSearchValue}
            />
            <TodoCounter 
              loading = {loading}
              completedTodos = {completedTodos}
              totalTodos = {totalTodos}
            />
          </TodoHeader>

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos loading={loading} />}

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

          <CreateTodoButton 
            setOpenModal = {setOpenModal}
          />

          {openModal && (
            <Modal>
              <TodoForm 
                addTodo = {addTodo}
                setOpenModal = {setOpenModal}
              />
              
            </Modal>
          )}
        </>
      );

}

export default App;
