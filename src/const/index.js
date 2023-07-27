export const initialState = {
          positionState: [
            {
              id: 1,
              name: "Маршрут 1",
              start: {
                lat: 59.84660399,
                lng: 30.29496392,
              },
              space: {
                lat: 59.84934196,
                lng: 30.42423701,
              },
              end: {
                lat: 59.83567701,
                lng: 30.38064206,
              },
            },
            {
              id: 2,
              name: "Маршрут 2",
              start: {
                lat: 59.82934196,
                lng: 30.42423701,
              },
              space: {
                lat: 59.82761295,
                lng: 30.41705607,
              },
              end: {
                lat: 59.84660399,
                lng: 30.29496392,
              },
            },
            {
              id: 3,
              name: "Маршрут 3",
              start: {
                lat: 59.83567701,
                lng: 30.38064206,
              },
              space: {
                lat: 59.84660399,
                lng: 30.29496392,
              },
              end: {
                lat: 59.82761295,
                lng: 30.41705607,
              },
            },
          ],
          isLoading: false,
          isError: "",
          selectedWay: null,
          selectedWayPolyline: [],
};

export const ROUTE_API_URL =
          process.env.API_URL || "https://router.project-osrm.org/route/v1/driving";
  
export    const columns = [
                    {
                      title: "Маршрут",
                      dataIndex: "name",
                      key: "id",
                    },
          ];
                  
