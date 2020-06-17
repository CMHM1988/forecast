//
import React from "react";
import Maps from "./Maps";
import Weather from "./Weather";
import NotFound from "./NotFound";

export default function Screen({response}) {
   //
   if (Object.keys(response).length === 0) return null;
   //
   if (response.cod !== 200) return <NotFound />;
   //
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
