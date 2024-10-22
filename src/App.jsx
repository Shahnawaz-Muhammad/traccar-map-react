import { useState } from "react";

import "./App.css";
import CarMap from "./pages/Map";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-full">
        <Routes>
          {/* <Route index element={<Login />} /> */}
          <Route index element={<CarMap/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
