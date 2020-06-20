// Importando referencias de react.
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
// Importando valores externos.
import { WEATHER_KEY, WEATHER_URL } from "services/settings";

// Exportando functional component.
function Search({setResponse}) {
   //
   const [keyword, setKeyword] = useState(""),
      //
      keyRef = useRef(null),
      // Creacion de eventos.
      handleSearch = e => {
         // Ejecutaoms la busqueda con el valor actualizado
         e.preventDefault();
         // Validando campo vacio antes de actualizar.
         if (keyRef.current.value.trim() !== "") {
            // Evento del padre para ejecutar la busqueda.
            setKeyword(keyRef.current.value);
         }
      },
      handleClear = e => {
         // Limpiamos los valores.
         e.preventDefault();
         // Limpiando valor.
         keyRef.current.value = "";
         // Evento del padre para ejecutar la busqueda.
         setKeyword("");
      };
   useEffect(() => {
      //
      if (keyword !== "") {
         // Funcion para actualizar el keyword.
         const hanleAPIRequest = async() => {
            // Ejecucion de la API para obtener los valores de acuerdo a la ciudad escrita por el usuario.
            const url = `${WEATHER_URL}?q=${keyword}&appid=${WEATHER_KEY}`;
            const response = await fetch(url);
            const result = await response.json();
            // Actualizamos el estado principal.
            setResponse(result);
         };
         // Llamado de la API.
         hanleAPIRequest();
      } else {
         // Actualizamos el estado principal.
         setResponse({});
      }
   }, [keyword, setResponse]);
   //
   return (
      <form className="search flex flex-center">
         <input
            type="text"
            className="app-text-field border-box pleft10 pright10 mright15 flex-grow-1"
            placeholder="City to search"
            ref={keyRef}
         />
         <button
            className="app-button-blue no-border font12 size-100x30 mright15"
            onClick={handleSearch}
         >Search</button>
         <button
            className="app-button-gray no-border font12 size-100x30"
            onClick={handleClear}
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
