import Todo from './Todo';
import styles from './TodoList.module.css';

interface TodoType {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: TodoType[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  deleteTodo,
  toggleTodo,
}) => {
  return (
    <div className={styles.todoListContainer}>
      {!!todos.length
        ? todos.map((todo, index) => (
            <Todo
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              key={index}
              todo={todo}
            />
          ))
        : 'Todo list is empty'}
    </div>
  );
};

export default TodoList;
