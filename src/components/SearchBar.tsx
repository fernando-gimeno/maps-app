import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResult } from "./SearchResult";

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // TODO: Buscar o ejecutar consulta
      searchPlacesByTerm(event.target.value)
    }, 700);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        className="form-control"
        placeholder="Buscar un lugar..."
        onChange={onQueryChanged}
      />
      <SearchResult />
    </div>
  );
};
