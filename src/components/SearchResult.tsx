import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { LoadingPlaces } from "./LoadingPlaces";
import { Feature } from "../interfaces/places";

export const SearchResult = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRoutesBetweenPoints } = useContext(MapContext);

  const [activeId, setActiveId] = useState("");

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.geometry.coordinates;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.geometry.coordinates;

    getRoutesBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  return (
    <ul className="list-group mt-3 overflow-auto" style={{ maxHeight: "calc(100vh - 300px)", scrollbarWidth: "thin" }}>
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? "active" : ""
          }`}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.properties.name}</h6>
          <p>
            <small>{place.properties.full_address}</small>
          </p>
          <button
            className={`btn btn-sm ${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
            onClick={() => getRoute(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
