import React, { useState, useEffect } from "react";
import TableRow from "../components/TableRow";
import Countries from "../components/Countries";
import axios from "axios";
import Summary from "../components/Summary";
import Loader from "../components/Loader";
import "./CovidTable.css";

const CovidTable = ({ onchangeHandler }) => {
  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [countries, setCountries] = useState([]);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationRecords, setLocationRecords] = useState("");

  const fetchLocation = async () => {
    await axios
      .get("https://extreme-ip-lookup.com/json/")
      .then((res) => {
        setLocation(res.data);
        localStorage.setItem("location", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCountries = async () => {
    await axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
        localStorage.setItem("countries", JSON.stringify(res.data));

        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
      });
  };

  const fetchCovidRecords = async () => {
    setLoading(true);
    await axios
      .get(process.env.REACT_APP_API_URL)
      .then(async (res) => {
        setRecords(res.data);

        setFilterRecords("");
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
      });
  };

  const fetchCovidRecordByGeoLocation = async (countryName) => {
    debugger;
    if (
      countryName === null ||
      countryName === undefined ||
      countryName === ""
    ) {
      countryName = JSON.parse(localStorage.getItem("location"))["country"];
    }
    debugger;
    setLoading(true);

    await axios
      .get(process.env.REACT_APP_API_URL + `/${countryName}`)
      .then(async (res) => {
        setLocationRecords(res.data);

        localStorage.setItem("summary", JSON.stringify(res.data));
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    debugger;

    async function fetchData() {
      const tempcountries = JSON.parse(localStorage.getItem("countries"));
      tempcountries ? setCountries(tempcountries) : await fetchCountries();

      fetchCovidRecords();
      const tempLocation = JSON.parse(localStorage.getItem("location"));
      tempLocation ? setLocation(tempLocation) : await fetchLocation();

      const tempSummary = JSON.parse(localStorage.getItem("summary"));
      tempSummary
        ? setLocationRecords(tempSummary)
        : await fetchCovidRecordByGeoLocation(location);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  onchangeHandler = (name) => {
    if (name) {
      let filterCountry = records.filter((item) => item.country === name);
      if (filterCountry.length > 0) {
        setFilterRecords(filterCountry);
      }
    }
  };

  if (loading === true) {
    return <Loader />;
  }

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-10 mx-auto">
          <h4 style={{ textAlign: "center" }}>
            Covid summary status of {location.country}
          </h4>
          <Summary summary={locationRecords} title={location} />
          <div className="card rounded shadow border-0">
            <div className="card-body p-5 bg-white rounded">
              <div className="table-responsive">
                {filterRecords.length > 0 ? (
                  <button onClick={() => fetchCovidRecords()}>
                    <i class="fa fa-refresh fa-spin"></i>Show all
                  </button>
                ) : null}

                <Countries countries={countries} onChange={onchangeHandler} />

                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Cases</th>
                      <th>Deaths</th>
                      <th>Active</th>
                      <th>Critical</th>
                      <th>Total Cases</th>
                      <th>Total Deaths</th>
                      <th>Total Recovered</th>
                      <th>Total Test</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterRecords.length > 0 ? (
                      <TableRow records={filterRecords} />
                    ) : (
                      <TableRow records={records} />
                    )}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Country</th>
                      <th>Cases</th>
                      <th>Deaths</th>
                      <th>Active</th>
                      <th>Critical</th>
                      <th>Total Cases</th>
                      <th>Total Deaths</th>
                      <th>Total Recovered</th>
                      <th>Total Test</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidTable;
