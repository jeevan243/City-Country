import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export const Home = () => {
  const [data, setData] = useState([]);

  // const dispatch = useDispatch();
  // const { city, loading, error } = useSelector((store) => store.city);
  // console.log(city);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://city-country.herokuapp.com/cities").then((res) => {
      setData(res.data);
    });
  };

  //delete
  function handleDelete(e) {
    console.log(e);
    axios.delete(`https://city-country.herokuapp.com/cities/${e}`);
    getData();
  }
  //sort country

  function handleCountry() {
    data.sort(function (a, b) {
      return a.country.localeCompare(b.country);
    });
    // console.log(data);
    setData([...data]);
  }

  //sort by population
  function handlePopulation(value) {
    if (value == 1) {
      data.sort(function (a, b) {
        return a.population - b.population;
      });
    } else {
      data.sort(function (a, b) {
        return b.population - a.population;
      });
    }
    setData([...data]);
  }

  return (
    <>
      <div>
        <h3>Filter By:</h3>
        <Button variant="contained" onClick={handleCountry}>
          Country
        </Button>
        {" "}
        <Button
          variant="contained"
          onClick={() => {
            handlePopulation(1);
          }} 
        >
          Population asc
        </Button>

        {" "}
        <Button
          variant="contained"
          onClick={() => {
            handlePopulation(-1);
          }}
        >
          Population desc
        </Button>
        <hr />
      </div>
      <div id="links">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Home
        </Link>{" "}
        <Link to={"/addcountry"} style={{ textDecoration: "none" }}>
          Add Country
        </Link>{" "}
        <Link to={"/addcity"} style={{ textDecoration: "none" }}>
          Add City
        </Link>
      </div>
      <hr />
      <div id="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.country}</td>
                    <td>{e.cityname}</td>
                    <td>{e.population}</td>
                    <td>
                      <button>Edit</button>
                    </td>

                    <button
                      onClick={() => {
                        handleDelete(e.id);
                      }}
                    >
                      Delete
                    </button>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
