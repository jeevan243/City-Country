import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8080/cities").then((res) => {
      setData(res.data);
    });
  };

  //delete
  function handleDelete(e) {
    let { id } = e.target;
    console.log(e);
  }
  //sort country

  function handleCountry() {
    data.sort(function (a, b) {
      return a.country.localeCompare(b.country);
    });
    console.log(data);
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
        <button variant="text" onClick={handleCountry}>
          Country
        </button>
        <button
          variant="text"
          onClick={() => {
            handlePopulation(1);
          }}
        >
          Population asc
        </button>
        <button
          variant="text"
          onClick={() => {
            handlePopulation(-1);
          }}
        >
          Population desc
        </button>
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
                    <td>
                      <button
                        onClick={(e) => {
                          handleDelete(e);
                        }}
                      >
                        Delete
                      </button>
                    </td>
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
