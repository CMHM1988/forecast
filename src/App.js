import React from "react";
// Importando Paginas.
import Header from "layout/Header";
import Searcher from "pages/Searcher";

export default function App() {
   return (
      <>
         {/* Header section --------------------------------------------- */}
         <Header />
         {/* Body section ----------------------------------------------- */}
         <Searcher />
      </>
   );
}
