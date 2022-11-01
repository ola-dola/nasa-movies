import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="*" element={<p>404: Page does not exist</p>} />
      </Routes>
    </div>
  );
}

export default App;
