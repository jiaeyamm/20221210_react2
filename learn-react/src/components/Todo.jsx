import { useMemo, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function countUndoneTodo(todos) {
  console.log("할일 세는 중");
  return todos.filter((todo) => !todo.done).length;
}

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "투두리스트 만들기", date: "22/12/11", done: true },
  ]);

  //useMemo : 특정값이 변할 때에만 연산을 하고, 나머지 경우엔 기존값을 재사용(성능개선)
  const undoneTodoCount = useMemo(() => countUndoneTodo(todos), [todos]);
  console.log(undoneTodoCount);

  //useRef로 관리되는 값은 변경되어도 리렌더링이 발생되지 않음 => 렌더링과 별개로 변수로 사용함
  const nextId = useRef(2);

  const handleSubmit = (inputs) => {
    // 객체나 배열을 업데이트 할 땐 불변성을 지켜야 함 => 지키지 않으면 상태변화를 감지 할 수 x
    //  => 새로운 객체를 생성하는 방식이어야 함
    // setTodos([...todos, input]);
    setTodos(
      todos.concat({
        ...inputs,
        id: nextId.current,
        done: false,
      })
    );

    nextId.current++;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    // todo의 done값 반전
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <TodoInput handleSubmit={handleSubmit} />
      <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
    </>
  );
}

export default Todo;
