import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

interface TodoFormProps {
  addTodo: (title: string) => void;
  deleteAllTodos: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo, deleteAllTodos }) => {
  const [title, setTitle] = useState<string>('');

  const addSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(title);
    setTitle('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={addSubmitHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
        <Button
          onClick={() => deleteAllTodos()}
          type="button"
          title="Delete All Todos"
        >
          Delete All
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
