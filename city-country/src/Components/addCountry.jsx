import { useState } from "react";
import axios from "axios";
export const Addcountry = () => {
  const [country, setCountry] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://city-country.herokuapp.com/countries", { name: country });
  }
  function handleChange(e) {
    setCountry(e.target.value);
    // console.log(e.target.value)
  }
  return (
    <>
      <h1>Add country</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};
