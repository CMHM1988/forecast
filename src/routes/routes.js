// Importando paginas.
import Searcher from "pages/Searcher";
import Info from "pages/Info";

// Generando array de paginas.
export default [
   {
      path: "/",
      component: Searcher
   },
   {
      path: "/info",
      component: Info
   }
];
