import { useContext } from "react";
import { useEffect } from "react";
import { RemoveContext } from "./Todos";

// todolist 출력
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle }) {
  const onRemove = useContext(RemoveContext);

  const { text, id, done } = todo;
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) onRemove(id);
  };
  const handleToggle = () => {
    onToggle(id);
  };
  return (
    <li>
      <span
        onClick={handleToggle}
        style={{ textDecoration: todo.done && "line-through" }}
      >
        {text}
      </span>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
}

export default TodoList;
