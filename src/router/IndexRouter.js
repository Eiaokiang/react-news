import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";

export default function IndexRouter() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render = {()=> 
            localStorage.getItem('token') ? <NewsSandBox/> : <Redirect to="/login"/>
          } />
        </Switch>
      </HashRouter>
    </div>
  );
}
