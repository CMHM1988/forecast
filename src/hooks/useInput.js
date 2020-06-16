// Importando librerias de React.
import { useState } from "react";

// Inicializando funcion.
function useInput(initialValue) {
   // Inicializando los valores.
   const [value, setValue] = useState(initialValue);
   // Reseteando el valor incial.
   const reset = () => {
      // Asignado el valor inicial al state.
      setValue(initialValue);
   };
   // Declarando funcion para actualizar el input.
   const bind = {
      value,
      onChange: e => {
         // Asignando nuevo valor al state.
         setValue(e.target.value);
      }
   };
   // Restornando valores para su ejecucion.
   return [value, bind, reset];

}

export default useInput;
