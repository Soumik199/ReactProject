// This file creates a context for managing todo items in a React application. 
// It uses the createContext function from React to create a context object named TodoItemStore, 
// (*This context can be used to share the todo items state 
// across different components in the application without having to pass props down manually
//  at every level.)
import { createContext } from "react";
const TodoItemStore = createContext([]);
export default TodoItemStore;

