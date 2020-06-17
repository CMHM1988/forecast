// Importando librerias de react.
import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

function Maps({coord}) {
   //
   const { lat, lon } = coord;
   //
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

export default React.memo(Maps);
