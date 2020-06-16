// Importando referencias de react.
import React from "react";

// Exportando functional component.
export default function Search() {
   return (
      <div className="search flex flex-center">
         <input
            type="text"
            className="app-text-field border-box pleft10 pright10 mright15 flex-grow-1"
            placeholder="City to search"
         />
         <button className="app-button-blue no-border font12 size-100x25 mright15">Search</button>
         <button className="app-button-blue no-border font12 size-100x25">Clear</button>
      </div>
   );
}
