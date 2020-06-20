// Importando librerias de react.
import React from "react";
import PropTypes from "prop-types";

// Inicializando react functional component.
function Weather({values}) {
   // Exrayendo valores para llenar el formato.
   const { name, main } = values;
   // Retornando componente.
   return (
      <aside className="weather-container grid font14">
         <label htmlFor="" className="font-bold result-name">The weather in {name} City is</label>
         <p className="grid-justify-self-center">
            <label className="font50 blue" htmlFor="">{parseFloat(main.temp - 273.15, 10).toFixed(0)} &#8451;</label>
         </p>
         <p className="grid-justify-self-center">
            <label htmlFor="" className="font-bold">Max: </label>
            <label className="mright25" htmlFor="">{parseFloat(main.temp_max - 273.15, 10).toFixed(2)} &#8451;</label>
            <label htmlFor="" className="font-bold">Min: </label>
            <label htmlFor="">{parseFloat(main.temp_min - 273.15, 10).toFixed(2)} &#8451;</label>
         </p>
         <p className="font-bold red">Additional Information</p>
         <p>
            <label htmlFor="" className="font-bold">Pressure: </label>
            <label htmlFor="">{main.pressure} pci</label>
         </p>
         <p>
            <label htmlFor="" className="font-bold">Humidity: </label>
            <label htmlFor="">{main.humidity} %</label>
         </p>
         <p className="font10 grid-align-self-end">
            <label htmlFor="" className="font-bold">Visit </label>
            <a
               className="blue"
               href="https://openweathermap.org/"
               target="_blank"
               rel="noopener noreferrer">openweathermap.org</a>
            <label htmlFor="" className="font-bold"> for mor information</label>
         </p>
      </aside>
   );
}

// Documentando componente.
Screen.propTypes = {
   setResponse: PropTypes.object.isRequired
};

// Exportando componente.
export default React.memo(Weather);
