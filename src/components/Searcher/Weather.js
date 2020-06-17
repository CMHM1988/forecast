// Importando librerias de react.
import React from "react";

// Inicializando react functional component.
function Weather({values}) {
   // Exrayendo valores para llenar el formato.
   const { name, main } = values;
   // Retornando componente.
   return (
      <aside className="weather-container grid">
         <label htmlFor="" className="font-bold result-name">{name}</label>
         <p>
            <label htmlFor="" className="font-bold">Temperature: </label>
            <label htmlFor="">{parseFloat(main.temp - 273.15, 10).toFixed(2)} °C</label>
         </p>
         <p>
            <label htmlFor="" className="font-bold">Pressure: </label>
            <label htmlFor="">{main.pressure} pci</label>
         </p>
         <p>
            <label htmlFor="" className="font-bold">Humidity: </label>
            <label htmlFor="">{main.humidity} %</label>
         </p>
         <p>
            <label htmlFor="" className="font-bold">Max temperature: </label>
            <label htmlFor="">{parseFloat(main.temp_max - 273.15, 10).toFixed(2)} °C</label>
         </p>
         <p>
            <label htmlFor="" className="font-bold">Min temperature: </label>
            <label htmlFor="">{parseFloat(main.temp_min - 273.15, 10).toFixed(2)} °C</label>
         </p>
      </aside>
   );
}

export default React.memo(Weather);
