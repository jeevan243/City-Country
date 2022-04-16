import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Components/home";
import { Addcity } from "./Components/addCity";
import { Addcountry } from "./Components/addCountry";

export const AllRouters = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcity" element={<Addcity />} />
        <Route path="/addcountry" element={<Addcountry />} />
      </Routes>
    </>
  );
};
