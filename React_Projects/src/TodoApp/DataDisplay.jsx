import { useContext } from "react";
import TodoItemStore from "../Store/Todo-item-store";
const TodoDataDisplay = () => {
  const TodoItem = useContext(TodoItemStore);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Task Name</th>
          <th scope="col">Date Assigned </th>
          <th scope="col">Actions </th>
        </tr>
      </thead>
      <tbody>
        {TodoItem.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.task}</td>
            <td>{todo.Date}</td>
            <td>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-secondary mx-2">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TodoDataDisplay;
