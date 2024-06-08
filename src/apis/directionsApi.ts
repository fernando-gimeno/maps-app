import axios from "axios";

const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    access_token:
      "pk.eyJ1IjoiZmVybmFuZG91eSIsImEiOiJjbGs4cDh3OGYwZ2FtM3FvOGR0dG03NjNnIn0.S8QjYJ1AIXW9CttqB-Dvcg",
    alternatives: false,
    geometries: "geojson",
    overview: "simplified",
    steps: false,
  },
});

export default directionsApi;
