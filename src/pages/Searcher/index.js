// Importando referencias de react.
import React from "react";
// Importando componentes.
import Search from "components/Searcher/Search";
import Maps from "components/Searcher/Maps";
import Weather from "components/Searcher/Weather";
// Importando valores externos.
import { WEATHER_MAP_KEY } from "services/settings";
// Hoja de estilos.
import "styles/searcher.css";

// Inicializando react functional component.
export default function Searcher() {
   // Funcion para ejecutar el API del clima.
   const handleLoadWeather = async ({keyword}) => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${WEATHER_MAP_KEY}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
   };
   //
   return (
      <form className="searcher-grid grid mleft-auto mright-auto mtop25">
         <Search
            onSubmit={handleLoadWeather}
         />
         <Maps />
         <Weather />
      </form>
   );
}
