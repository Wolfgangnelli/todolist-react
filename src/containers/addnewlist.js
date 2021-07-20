import { connect } from "react-redux";
import addTodoComponent from "../components/addTodoComponent";
import { addLists } from "../actions/lists";

export default connect(null, { addTodo: addLists })(addTodoComponent);
