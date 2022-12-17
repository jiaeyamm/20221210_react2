import { useTodoDispatch } from "../../contexts/todos";

function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();
  const { id, text, done } = todo;
  return (
    <li>
      <span
        style={{ textDecoration: done && "line-through" }}
        onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
      >
        {text}
      </span>
      <button onClick={() => dispatch({ type: "REMOVE_TODO", id })}>-</button>
    </li>
  );
}

export default TodoItem;
