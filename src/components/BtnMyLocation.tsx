import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("Mapa no está listo");
    if (!userLocation) throw new Error("No hay ubicación del usuario");

    map?.flyTo({
      center: userLocation,
      zoom: 14,
    });
  };

  return (
    <button
      className="btn btn-primary"
      style={{ position: "fixed", bottom: 10, right: 10, zIndex: 999 }}
      onClick={onClick}
    >
      Mi Ubicación
    </button>
  );
};
