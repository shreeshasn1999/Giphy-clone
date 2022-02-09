import React from "react";
import Stickers from "./Stickers";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import App from "./App";
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/stickers/:stickersId" component={Stickers}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
