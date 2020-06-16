// Importando referencias de react.
import React, { useState } from "react";

// Exportando functional component.
function Search({onSubmit}) {
   //
   const [keyword, setKeyword] = useState("");
   // Creacion de eventos.
   const handleChange = e => {
         // Asignando el valor del input al estado.
         setKeyword(e.target.value);
      },
      handleSearch = e => {
         // Ejecutaoms la busqueda con el valor actualizado
         e.preventDefault();
         // Evento del padre para ejecutar la busqueda.
         onSubmit({keyword});
      },
      handleClear = e => {
         // Limpiamos los valores.
         e.preventDefault();
         //
         console.log("Clear");
      };
   return (
      <div className="search flex flex-center">
         <input
            type="text"
            className="app-text-field border-box pleft10 pright10 mright15 flex-grow-1"
            placeholder="City to search"
            onChange={handleChange}
         />
         <button
            className="app-button-blue no-border font12 size-100x30 mright15"
            onClick={handleSearch}
         >
            Search
         </button>
         <button
            className="app-button-gray no-border font12 size-100x30"
            onClick={handleClear}
         >Clear</button>
      </div>
   );
}

export default React.memo(Search);
