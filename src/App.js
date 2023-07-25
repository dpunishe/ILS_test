import Map from "./components/map/Map";
import MyTable from "./components/table/MyTable";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <MyTable />
      <Map />
    </div>
  );
}

export default App;
