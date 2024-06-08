import axios from "axios";

const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/search/geocode/v6",
  params: {
    limit: 5,
    access_token:
      "pk.eyJ1IjoiZmVybmFuZG91eSIsImEiOiJjbGs4cDh3OGYwZ2FtM3FvOGR0dG03NjNnIn0.S8QjYJ1AIXW9CttqB-Dvcg",
    language: "es",
  },
});

export default searchApi;
