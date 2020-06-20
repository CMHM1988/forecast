// Importando librerias de react.
import React from "react";
import PropTypes from "prop-types";
// Importando componentes a utilizar.
import Maps from "./Maps";
import Weather from "./Weather";
import NotFound from "./NotFound";

function Screen({response}) {
   // Validando si el objeto esta vacio.
   /* Esta condicionante se activara cuando es la primera carga o cuando se limpie el objeto */
   if (Object.keys(response).length === 0) return null;
   // Revisando que la repuesta sea valida.
   if (response.cod !== 200) return <NotFound />;
   // Mostrando componente con los resultados obtenidos de la API
   return (
      <section className="info-container grid">
         <Maps
            coord={response.coord}
         />
         <Weather
            values={response}
         />
      </section>
   );

}

// Documentando componente.
Screen.propTypes = {
   response: PropTypes.object.isRequired
};

// Exportando componente.
export default React.memo(Screen);
