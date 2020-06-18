// Importando referencias de react.
import React, { useState } from "react";
// Importando componentes.
import Search from "components/Searcher/Search";
// Hoja de estilos.
import "styles/searcher.css";
import Screen from "components/Searcher/Screen";

// Inicializando react functional component.
export default function Searcher() {
   // Iniciando estado para los valores del clima.
   const [response, setResponse] = useState({});
   // Construyendo el componente.
   return (
      <main className="searcher-grid grid mleft-auto mright-auto mtop25">
         <Search
            setResponse={setResponse}
         />
         <Screen response={response}/>
      </main>
   );
}
