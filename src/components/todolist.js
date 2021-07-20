import React, { Component } from "react";
import Todo from "./todo";
import PropTypes from "prop-types";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    //  if (props.error.hasError) {
    //    throw new Error(props.error.errorMessage);
    //  }
  }

  componentDidMount = () => {
    this.props.getTodos(this.props.list, this.props.filter);
  };

  componentDidUpdate = (prevProps) => {
    if (
      this.props.list !== prevProps.list ||
      this.props.filter !== prevProps.filter
    ) {
      this.props.getTodos(this.props.list, this.props.filter);
    }
  };

  render() {
    return (
      <div className="w-2/5 md:w-2/4">
        <ul className="todos my-4 mx-auto">
          {this.props.todos.map((todo) => (
            <Todo
              todoItem={todo}
              /*
              onClick={toggleTodo}
              removeTodo={removeTodo}*/
              {...this.props}
              key={todo.id}
              id={todo.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Todolist.propTypes = {
  props: PropTypes.shape({
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    todos: PropTypes.array,
  }),
};

// ora sto passando l'id dell'oggetto e non la posizione che ha l'oggetto nell'array

//function todolist(props) {
// //   //todos, removeTodo, toggleTodo
// //   if (props.error.hasError) {
// //     throw new Error(props.error.errorMessage);
// //   }
// //   return (
// //     <div className="w-2/4">
// //       <ul className="todos my-4 mx-auto">
// //         {props.todos.map(todo => (
// //           <Todo
// //             todoItem={todo}
// //             /*
// //             onClick={toggleTodo}
// //             removeTodo={removeTodo}*/
// //             {...props}
// //             key={todo.id}
// //             id={todo.id}
// //           />
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }
