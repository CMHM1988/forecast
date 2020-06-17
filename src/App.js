import React from "react";
// React Routers
import { BrowserRouter as Router} from "react-router-dom";
// Importando Paginas.
import Header from "layout/Header";
import Pages from "routes";

export default function App() {
   return (
      <Router>
         {/* Header section --------------------------------------------- */}
         <Header />
         {/* Body section ----------------------------------------------- */}
         <Pages />
      </Router>
   );
}
