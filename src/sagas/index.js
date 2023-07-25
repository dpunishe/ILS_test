import { call, put, takeEvery } from "redux-saga/effects";
import ApiService from "../services/api";
import {
  setSelectedWay,
  setSelectedWayPolyline,
  setSelectedWayPolylineError,
} from "../store/map/mapSlice";

function* fetchWaySelection(action) {
  yield put(setSelectedWay(action.payload));
  try {
    const selectedWay = action.payload;
    const start = selectedWay.start;
    const space = selectedWay.space;
    const end = selectedWay.end;
    const responce = yield call(
      ApiService.fetchPolyline,
      start,
      space,
      end
    );
    yield put(
      setSelectedWayPolyline(responce.data.routes[0].geometry.coordinates)
    );
  } catch (error) {
    yield put(setSelectedWayPolylineError(error));
  }
}

function* waitFetchWaySelection() {
  yield takeEvery("saga/setSelectedWay", fetchWaySelection);
}

export default waitFetchWaySelection;
