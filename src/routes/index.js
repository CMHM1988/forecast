// Importando librerias de react.
import React from "react";
import { Route, Switch } from "react-router-dom";
//
import routes from "./routes";

function Pages() {
   return (
      <Switch>
         {
            routes.map((route, index) =>  <Route exact key={index} path={route.path} component={route.component}/>)
         }
      </Switch>
   );
}

// Export current component.
export default Pages;
