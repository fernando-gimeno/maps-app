import { BtnMyLocation, MapView, MapIcon, SearchBar } from "../components";

export const HomeScreen = () => {
  return (
    <div>
      <MapIcon />
      <SearchBar />
      <MapView />
      <BtnMyLocation />
    </div>
  );
};
