import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp.tsx";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmVybmFuZG91eSIsImEiOiJjbGs4cDh3OGYwZ2FtM3FvOGR0dG03NjNnIn0.S8QjYJ1AIXW9CttqB-Dvcg";

if (!navigator.geolocation) {
  alert("Navegador no soporta geolocalización");
  throw new Error("Tu navegador no tiene opción de Geolocalización");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
