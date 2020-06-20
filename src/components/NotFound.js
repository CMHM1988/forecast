//
import React from "react";
//
import notFounded from "image/not-found.jpg";
//
export default function NotFound() {
   return (
      <div className="text-center">
         <img className="full-width" src={ notFounded } alt=""/>
         <h1>City not found, try again...</h1>
      </div>
   );
}
