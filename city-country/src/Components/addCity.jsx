import axios from "axios";
import { useEffect, useState } from "react";

export const Addcity = () => {
  var obj = {
    cityname: "",
    population: "",
    country: "",
  };

  let [data, setData] = useState(obj);

  let [countrySelect, setCountryselect] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/countries").then((res) => {
      setCountryselect(res.data);
    });
  };

  console.log(countrySelect);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // console.log(value);
    setData({ ...data, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/cities", data).then((res) => {
      alert("Data saved Successfully");
    });
  };

  return (
    <>
      <div>
        <h1>City Country</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>City Name: </label>
          <input type="text" id="cityname" onChange={handleChange} />{" "}
          <label>Population: </label>
          <input type="number" id="population" onChange={handleChange} />{" "}
          <label>Country: </label>
          <select name="" id="country" onChange={handleChange}>
            <option>Select Country</option>
            {countrySelect.map((e) => {
              return (
                <>
                  <option value={e.name}>{e.name}</option>
                </>
              );
            })}
          </select>
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};
