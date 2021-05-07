import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
// import { firebase } from "./components/lib/firebase.prod";
// import { FirebaseContext } from "./components/context/firebase";
import reportWebVitals from "./reportWebVitals";

render(
  // <FirebaseContext.Provider value={{ firebase }}>
  <StrictMode>
    <App />
  </StrictMode>,
  // </FirebaseContext.Provider>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
