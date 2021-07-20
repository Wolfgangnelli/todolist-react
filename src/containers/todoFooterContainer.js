import { connect } from "react-redux";
import TodoFooter from "../components/todofooter";
import { filterTodo } from "../actions/index";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    activeFilter: state.setFilter,
  };
};

export default withRouter(connect(mapStateToProps, { filterTodo })(TodoFooter));

// N.B. Quando non passo niente a connect(), il Todofooter riceverà come parametro/proprietà dispatch
