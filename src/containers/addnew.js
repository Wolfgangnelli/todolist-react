import { connect } from "react-redux";
import addTodoComponent from "../components/addTodoComponent";
import { addTodo } from "../actions/index";

export default connect(null, { addTodo })(addTodoComponent);

/*
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addnew: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(null, mapDispatchToProps)(addTodoComponent);
*/
