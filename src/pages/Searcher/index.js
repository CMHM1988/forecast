// Importando referencias de react.
import React from "react";
// Importando componentes.
import Search from "components/Searcher/Search";
import Maps from "components/Searcher/Maps";

export default function Searcher() {
   return (
      <div>
         <Search />
         <Maps />
      </div>
   );
}
