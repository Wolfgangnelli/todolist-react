import { connect } from "react-redux";
import TodoList from "../components/todolist";
import { removeTodo, toggleTodo, getTodos } from "../actions/index";

const filterMyTodos = (todos = [], filter = "ALL") => {
  switch (filter) {
    case "TODO":
      return todos.filter(todo => !todo.completed);
    case "COMPLETED":
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    todos: filterMyTodos(state.todos, state.setFilter)
  };
};
// connect per collegare componenti alla store
const MyConnect = connect(mapStateToProps, {
  removeTodo,
  toggleTodo,
  getTodos
}); //bind action creators (legare una action a una dispatch) dispatch(removeTodo(i))
const MyTodolist = MyConnect(TodoList);
export default MyTodolist;
