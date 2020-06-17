// Importando referencias de react.
import React, { useState } from "react";
// Importando componentes.
import Search from "components/Searcher/Search";
// Hoja de estilos.
import "styles/searcher.css";
import Screen from "components/Searcher/Screen";

// Inicializando react functional component.
export default function Searcher() {
   //
   const [response, setResponse] = useState({});
   //
   return (
      <main className="searcher-grid grid mleft-auto mright-auto mtop25">
         <Search
            setResponse={setResponse}
         />
         <Screen response={response}/>
      </main>
   );
}
