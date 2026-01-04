import { useRef, useState } from "react";
import TodoDataDisplay from "./DataDisplay";
import TodoItemStore from "../Store/Todo-item-store";
const TodoHome = () => {
  const Task = useRef();
  const Date = useRef();
  const [todoItems, setTodoItems] = useState([]);
  const HandleSumbit = () => {
    const CurrentTask = Task.current.value;
    const CurrentDate = Date.current.value;
    const NewTodo = {
      id: todoItems.length + 1,
      task: CurrentTask,
      Date: CurrentDate,
    };
    setTodoItems([...todoItems, NewTodo]);
    Task.current.value = "";
    Date.current.value = "";
  };

  return (
    //{ state of value that need to be shared in across components}
    <TodoItemStore.Provider value={todoItems}>
      <div>
        <h1>Welcome to the Todo App</h1>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <input
                type="text"
                placeholder="Add a new todo"
                className="form-control"
                ref={Task}
              />
            </div>
            <div className="col-4">
              <input type="date" className="form-control" ref={Date} />
            </div>
            <div className="col-3">
              <button className="btn btn-primary" onClick={HandleSumbit}>
                Add Todo
              </button>
            </div>
          </div>
        </div>
        <div className="ItemDisplay">
          {todoItems.length === 0 ? (
            <h3 className="text-center mt-2">No Todo Items Added Yet</h3>
          ) : <TodoDataDisplay />}
        </div>
      </div>
    </TodoItemStore.Provider>
  );
};
export default TodoHome;
