// Importando librerias de React.
import { useState, useRef, useEffect } from "react";
// Importando valores externos.
import { WEATHER_KEY, WEATHER_URL } from "services/settings";
// Inicializando funcion.
function useSearchLocation(initialValue, setResponse) {
   //
   const searchRef = useRef(null);
   //
   const [keyword, setKeyword] = useState(initialValue),
      // Reseteando el valor incial.
      bindReset = {
         //
         onClick: e => {
            // Limpiamos los valores.
            e.preventDefault();
            /// Limpiando valor.
            searchRef.current.value = "";
            // Evento del padre para ejecutar la busqueda.
            setKeyword("");
         }
      },
      // Declarando funcion para actualizar el input.
      bindSearch = {
         //
         onClick: e => {
            // Ejecutaoms la busqueda con el valor actualizado
            e.preventDefault();
            // Validando campo vacio antes de actualizar.
            if (searchRef.current.value.trim() !== "") {
               // Evento del padre para ejecutar la busqueda.
               setKeyword(searchRef.current.value);
            }
         }
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
   // Restornando valores para su ejecucion.
   return [searchRef, bindSearch, bindReset];
}

export default useSearchLocation;
