import React, { useState } from "react";
import Auth from "../auth/auth";

//il context avrà come value di default quello che c'è nella localStorage
const userAuth = Auth.getUser();
//creo contesto/context, riceve come valore di default lo user
const UserDataContext = React.createContext(userAuth);

//questo HOC andrà ad avvolgere tutta la mia app, cosi da fornirgli il contesto creato sopra
//in props ho i componenti figli che vengono passati
const UserDataProvider = (props) => {
  const [user, setUser] = useState(userAuth);
  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataProvider };

//esportando un HOC e non direttamente il context, posso usare qui, dentro il componente, lo stato.
//lo uso per passare lo stato giu nei figli(tutti i componenti che sono sotto App), gli posso passare cosi
//l'utente nello stato

//quando andrò a leggere il context (quindi quello che passo in value), userò useContext di Hooks
// es. const user = useContext(UserDataContext)
