import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import FirstPage from "./pages";
import NotFoundPage from "./pages/404";
import Lista from "./pages/ListaCarti";
import CartePreferata from "./pages/CartePreferata";
import UltimaCitita from "./pages/UltimaCitita";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={FirstPage}></Route>
          <Route exact path="/404" component={NotFoundPage}></Route>
          <Route exact path="/lista" component={Lista}></Route>
          <Route exact path="/preferata" component={CartePreferata}></Route>
          <Route exact path="/citita" component={UltimaCitita}></Route>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}
