// Importando librerias de react.
import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

/*
   .leaflet-container {
   width: 500px;
   height: 500px;
}
*/

export default function Maps() {
   return (
      <div>
         <Map center={[51.51, -0.13]} zoom={10}>
            <TileLayer
               attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.51, -0.13]}>
               <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
            </Marker>
         </Map>
      </div>
   );
}
