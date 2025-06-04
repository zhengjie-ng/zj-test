import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "../routes/Homepage";
import OneMap from "../routes/OneMap";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/oneMap" element={<OneMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
