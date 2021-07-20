import React, { Component } from "react";

function Errore() {
  return (
    <div>
      <h1 className="text-red-600 text-3xl font-semibold">
        An error ocurred! <i className="fas fa-bug ml-1 text-red-600"></i>
      </h1>
    </div>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: ""
    };
  }

  // viene scatenato prima che venga renderizzato il component
  static getDerivedStateFromError(error) {
    // update state
    return {
      hasError: true,
      errorMessage: error
    };
  }
  //dopo che il componente è stato montato (potrei loggarlo su un sistema di error reporting come centrelink o uno locale facendo una chiamata verso il nostro server e loggare l'errore)
  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    return this.state.hasError ? <Errore /> : this.props.children;
  }
}

export default ErrorBoundary;

/**
 *  if (this.state.hasError) {
      return (
        <h1 className="text-black font-semibold">
          An error ocurred: {this.state.errorMessage}
        </h1>
      );
    }
    return this.props.children;
  
 */
