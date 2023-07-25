import axios from "axios";

export default class ApiService {
  static async fetchPolyline(start, space, end) {
    try {
      return await axios.get(
        `https://router.project-osrm.org/route/v1/driving/${start.lat},${start.lat};${space.lat},${space.lat};${end.lat},${end.lat}?geometries=geojson`
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
