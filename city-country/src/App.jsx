import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Addcity } from "./Components/addCity";
import { Addcountry } from "./Components/addCountry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addcity" element={<Addcity />} />
        <Route path="/addcountry" element={<Addcountry />} />
      </Routes>
    </div>
  );
}

export default App;
