// Importando librerias de react.
import React from "react";
import PropTypes from "prop-types";
// Importando Libreria para el mapa.
import { Map, TileLayer, Marker } from "react-leaflet";

// Declarando componente de tipo funcion.
function Maps({coord}) {
   // Extrayendo elementos del objeto.
   const { lat, lon } = coord;
   // Construyendo el componente.
   return (
      <Map center={[lat, lon]} zoom={10}>
         <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={[lat, lon]} />
      </Map>
   );
}

// Documnetando componente.
Maps.propTypes = {
   coord: PropTypes.object.isRequired
};

// Exportando el componente.
export default React.memo(Maps);
