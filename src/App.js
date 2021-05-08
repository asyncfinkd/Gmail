import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./components/login/signin/Signin";
import Signup from "./components/login/signup/Signup";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact>
          <p>Hello First Page</p>
        </Route>
        <Route path="/signin/v2" component={Signin} />
        <Route path="/signup/v2" component={Signup} />
      </BrowserRouter>
    </>
  );
}
