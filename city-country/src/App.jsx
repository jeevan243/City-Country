import "./App.css";
import { Addcity } from "./Components/addCity";
import { Addcountry } from "./Components/addCountry";
import { Home } from "./Components/home";
import { AllRouters } from "./Routers";

function App() {
  return (
    <div className="App">
      <AllRouters />
    </div>
  );
}

export default App;
