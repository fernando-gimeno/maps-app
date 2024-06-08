import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens";
import "mapbox-gl/dist/mapbox-gl.css";
import "./styles.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
