// Importando referencias de react.
import React from "react";
import PropTypes from "prop-types";
// Importando valores externos.
import useSearchLocation from "hooks/useSearchLocation";

// Exportando functional component.
function Search({setResponse}) {
   //
   const [searchRef, searchLocation, reset] = useSearchLocation("", setResponse);
   //
   return (
      <form className="search flex flex-center">
         <input
            type="text"
            className="app-text-field border-box pleft10 pright10 mright15 flex-grow-1"
            placeholder="City to search"
            ref={searchRef}
         />
         <button
            className="app-button-blue no-border font12 size-100x30 mright15"
            {...searchLocation}
         >Search</button>
         <button
            className="app-button-gray no-border font12 size-100x30"
            {...reset}
         >Clear</button>
      </form>
   );
}

// Documentando componente.
Screen.propTypes = {
   setResponse: PropTypes.func.isRequired
};

// Exportando componente.
export default React.memo(Search);
