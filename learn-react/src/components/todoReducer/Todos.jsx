// useReducer로 투두리스트 상태관리해보기
import { createContext, useReducer } from "react";
import { TodoProvider } from "../../contexts/todos";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

function Todos() {
  return (
    <>
      <TodoProvider>
        <div>
          <h1 className="title">TodoList</h1>
          <TodoCreate />
          <TodoList />
        </div>
      </TodoProvider>
    </>
  );
}

export default Todos;
