import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

interface TodoType {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoProps {
  todo: TodoType;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.title}</div>
      <RiDeleteBin2Line
        onClick={() => deleteTodo(todo.id)}
        className={styles.deleteIcon}
      />
      <FaCheck
        onClick={() => toggleTodo(todo.id)}
        className={styles.checkIcon}
      />
    </div>
  );
};

export default Todo;
