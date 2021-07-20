import axios from "axios";
import { AUTH_URL } from "../config/config";

function Auth() {
  /**
   * Verifico se il token è scaduto, se vero lo rimuovo dalla localStorage
   */
  const isTokenExpired = () => {
    const expires = +localStorage.getItem("token-expires");
    const res = new Date() > expires;
    if (res) {
      localStorage.removeItem("token-expires");
      localStorage.removeItem("auth");
    }
    return res;
  };

  /**
   * Gestore di errori
   * @param {*} resp
   */

  const handleError = (resp) => {
    let message = "";

    switch (+resp.status) {
      case 401:
        message = resp.data.error;
        break;
      case 500:
        message = resp.data.error;
        break;
      default:
        message = "Error contacting server";
    }

    return message;
  };

  const addAxiosToken = () => {
    const token = getToken();
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
  };

  /**
   * Login user
   * @param {*} email
   * @param {*} password
   */
  const singin = async (email, password) => {
    //intercetto eventuali errori nella chiamata col try catch
    try {
      //qui chiamo axios passando questi parametri al mio endpoint(che definisco dentro config), come un oggetto
      //RICORDA axios mi ritorna i dati nella chiave data. in result.data recupero i dati che mi ritorna laravel
      const result = await axios.post(AUTH_URL + "login", {
        email,
        password,
      });

      return manageResult(result);
    } catch (err) {
      console.log(err.response);
      return Promise.reject(handleError(err.response));
    }
  };

  const getToken = () => {
    if (isTokenExpired()) {
      return null;
    }
    //per leggere il token, leggo la stessa chiave dallo storage
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      return auth.access_token;
    } else {
      return null;
    }
  };

  function manageResult(result) {
    //gestisco TTL del jwt
    const data = result.data;
    if (!data || !data.access_token) {
      return Promise.reject("Invalid server response");
    }
    const expireDate = new Date().getTime() + data.expires_in * 1000;
    //gestisco il salvataggio del token jwt. setitem() per mettere valore nella localstorage
    localStorage.setItem("auth", JSON.stringify(result.data));
    localStorage.setItem("token-expires", expireDate);

    console.log(result.data);
    return result.data;
    //nei metodi che hanno async davanti il risultato sarà sempre una promise quindi quando chiamo singin per avere accesso
    // ai dati dovrò fare un .then() per catturare la risposta
  }

  const getUser = () => {
    if (isTokenExpired()) {
      return null;
    }
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth ? auth.user : null;
  };

  const singup = async (email, name, password) => {
    try {
      const result = await axios.post(AUTH_URL + "singup", {
        email,
        name,
        password,
      });

      return manageResult(result);
    } catch (err) {
      console.log(err.response);
      return Promise.reject(handleError(err.response));
    }
  };

  const logout = async () => {
    //chiamo funz per aggiungere il token alla chiamata
    addAxiosToken();
    try {
      //faccio logout dal backend. per fargli sapere qual'è l'utente gli passo il token attraverso headers di defaults (vedi funzione sopra)
      const result = await axios.post(AUTH_URL + "logout");
      //rimuovo token dalla storage al momento del logout
      localStorage.removeItem("auth");
      return result;
    } catch (err) {
      console.log(err.response);
      return Promise.reject(handleError(err.response));
    }
  };

  const refresh = () => {};

  //ho variabili. sarebbe come fare singin : singin, ecc...
  return {
    singin,
    singup,
    logout,
    refresh,
    getUser,
    isTokenExpired,
  };
}

const authMethods = Auth();
export default authMethods;
