import axios from "axios";
import {ROUTE_API_URL} from "../../const/index"
export default class ApiService {
  static async fetchPolyline(start, space, end) {
    try {
      return await axios.get(
        `${ROUTE_API_URL}/${start.lat},${start.lat};${space.lat},${space.lat};${end.lat},${end.lat}?geometries=geojson`
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
