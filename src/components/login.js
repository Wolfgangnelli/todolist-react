import React, { useState, useEffect } from "react";
import Auth from "../auth/auth";
import { UserDataContext } from "../containers/logincontext";

//in props ho un mix tra i params del router, più le props che vengono passate al componente
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [, setUser] = React.useContext(UserDataContext); //useContext in questo caso sarebbe il Consumer

  const singUpUser = (e) => {
    e.preventDefault();
    Auth.singup(email, name, password)
      .then((payload) => {
        setUser(payload.user);
        props.history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loginUser = (e) => {
    e.preventDefault();
    //alert(`Email: ${email} , Password: ${password}`);
    Auth.singin(email, password)
      .then((payload) => {
        //.access_token perchè in laravel in Auth/AuthController.php ritorno un oggetto con delle chiavi tra cui questa
        //alert(payload.access_token);
        setUser(payload.user);
        //Mandare user alla homepage. Essendo l'app collegata con il switch al router, ho acccesso alla proprietà della history,
        //quindi tra i parametri che passo in props al componente login, automaticamente ho accesso alle variabili del router, tra cui:
        props.history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center">
      <form
        action=""
        method="post"
        onSubmit={props.singup ? singUpUser : loginUser}
        className="bg-white w-4/5 md:w-2/4 mx-auto mt-10 rounded"
      >
        <fieldset className="border-white">
          {/* Vefifico se sono in singup */}
          <h1 className="text-4xl font-bold text-gray-900 mt-8">
            {props.singup ? "Singup" : "Login"}
          </h1>
          {props.singup && (
            <div className="flex flex-col w-3/4 mx-auto mt-12">
              <label
                htmlFor="name"
                className="text-gray-800 font-medium text-sm self-start"
              >
                Username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b border-gray-800 py-2 w-full self-start"
                placeholder="😀 Type your username"
                required
              />
            </div>
          )}
          <div className="flex flex-col w-3/4 mx-auto mt-12">
            <label
              htmlFor="email"
              className="text-gray-800 font-medium text-sm self-start"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-800 py-2 w-full self-start"
              placeholder="📩 Type your email"
              required
            />
          </div>
          <div className="flex flex-col w-3/4 mx-auto mt-6">
            <label
              htmlFor="password"
              className="text-gray-800 font-medium text-sm self-start"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-gray-800 py-2 w-full self-start"
              placeholder="🔒 Type your password"
              required
            />
          </div>
          <div className="mt-16 mb-20 FLEX flex-col">
            <button className="p-2 w-3/4 mx-auto btn rounded-full text-white font-bold focus:outline-none">
              {props.singup ? "SINGUP" : "LOGIN"}
            </button>
            <button
              className="p-2 w-3/4 mx-auto btn rounded-full text-white font-bold mt-2 focus:outline-none"
              type="reset"
              onClick={resetForm}
            >
              RESET
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
