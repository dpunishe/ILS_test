import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const Routing = () => {
  const wayPoints = useSelector((state) => state.maps.selectedWay);

  const map = useMap();

  useEffect(() => {
   
    if (!wayPoints) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(wayPoints.start.lat, wayPoints.start.lng),
        L.latLng(wayPoints.space.lat, wayPoints.space.lng),
        L.latLng(wayPoints.end.lat, wayPoints.end.lng),
      ],  
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [map, wayPoints]);

  return null;
};

export default Routing;
