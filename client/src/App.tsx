import React, { useEffect, useState } from 'react';
import TodoForm from './Todos/TodoForm';
import TodoList from './Todos/TodoList';
import './App.css';

export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos', {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: ITodo[] = await response.json();

        setTodos(data);
      } catch (error) {
        console.log(error, 'Error to get todos');
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (title: string): Promise<void> => {
    try {
      const response = await fetch('/api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newTodo: ITodo = await response.json();
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`/api/todos/remove/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAllTodos = async (): Promise<void> => {
    try {
      const response = await fetch('/api/todos/remove-all', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setTodos([]);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`/api/todos/update/${id}`, {
        method: 'PATCH',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedTodo: ITodo = await response.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">TODO</h1>
      <TodoForm addTodo={addTodo} deleteAllTodos={deleteAllTodos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
