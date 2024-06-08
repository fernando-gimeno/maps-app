export const getUserLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        resolve([longitude, latitude]);
      },
      (error) => {
        alert("No se pudo obtener la geolocalización");
        console.log(error);
        reject();
      }
    );
  });
};
