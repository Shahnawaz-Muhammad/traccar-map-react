import "./App.css";
import MapTile from "./pages/Map";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<MapTile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
