import mapIcon from "../assets/MapIcon.svg";

export const MapIcon = () => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', position: "fixed", top: 20, left: 20, width: 64, zIndex: 999, color: "white" }}
    >
      <img src={mapIcon} alt="Map Logo" />
      <h1>MapApp</h1>
    </div>
  );
};
