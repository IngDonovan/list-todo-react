import React from "react";

function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    },2000);//simulacion del tiempo de conexion
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Primera Tarea', completed: false },
//   { text: 'Second Task', completed: false },
//   { text: 'Terzo Compito', completed: true },
//   { text: 'Quartus Opus', completed: true },
//   { text: 'Cinquième Tâche', completed: false },
// ];
// localStorage.setItem('TASK_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TASK_V1');