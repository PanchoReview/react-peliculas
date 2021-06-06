import React from "react";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import IndiceGeneros from "./Components/Generos/IndiceGeneros";
import LandingPage from "./Components/LandingPage";
import Menu from "./Components/Utils/Menu";

function App() {  
  return (
    <>
      <BrowserRouter>
        <Menu />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>

            <Route path="/generos">
              <IndiceGeneros />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App;
