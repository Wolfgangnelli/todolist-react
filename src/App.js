import React, { Component } from "react";
import "./main.css";
import Header from "./components/header";
import { connect } from "react-redux";
import { getTodos } from "./actions/index";
import { getLists } from "./actions/lists";
import { Route, Switch } from "react-router-dom";
import Mytodos from "./containers/mytodos";
import Lists from "./containers/myTodoLists";
import { Login } from "./components/login";
import { Singup } from "./components/singup";
import Logout from "./components/logout";
import PrivateRoute from "./containers/privateroute";
import { UserDataProvider } from "./containers/logincontext";

class App extends Component {
  componentDidMount() {
    //faccio la dispatch qui, non appena il componente è montato
    this.props.getTodos();
    this.props.getLists();
  }

  render() {
    return (
      <UserDataProvider>
        <div className="App h-full min-h-screen">
          <Header />
          <Switch>
            <PrivateRoute path="(/|/todos)" component={Mytodos} />
            <PrivateRoute
              path="/lists/:list([0-9]+)/todos"
              component={Mytodos}
            />
            <PrivateRoute path="/lists" component={Lists} />

            <Route path="/singup" component={Singup} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </UserDataProvider>
    );
  }
}

export default connect(null, { getTodos, getLists })(App);
// Invecce che  fare un'altro container per App, faccio connect dell'app qua. Collego la mia app allo store(lo state)
// connect()(App) ache solo così riceverrebbe il dispatch

// (/|/todos) espressione regolare
// :list --> parametro che verrà catturato(nel componente mytodos) e passato a me
// ([]) regular expression, (metto cosi delle regole a questo parametro), es. devono essere solo dei numeri e
// può avere più di un numero. QUESTA è LA MIA REGOLA PER LISTA
// mytodos riceverà questo id (:list) nel parametro match

// Con Switch dico al react router di andare a verificare ogni rotta e la prima che combacia con
// la rotta del URL viene renderizzata e poi si ferma

//render={() => <div title="LOGIN">LOGIN</div>} era al posto di component={Login} nelle route
