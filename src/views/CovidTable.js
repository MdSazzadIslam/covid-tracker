import React, { useState, useEffect } from "react";
import TableRow from "../components/TableRow";
import axios from "axios";

import "./CovidTable.css";
import Loader from "../components/Loader";
const CovidTable = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    debugger;
    setLoading(true);
    console.log(loading);
    await axios
      .get("https://coronavirus-19-api.herokuapp.com/countries")
      .then((res) => {
        debugger;
        setRecords(res.data);
        console.log(res.data);
        console.log(loading);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading === true) {
    debugger;
    return <Loader />;
  }
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-lg-10 mx-auto">
          <div className="card rounded shadow border-0">
            <div className="card-body p-5 bg-white rounded">
              <div className="table-responsive">
                <input
                  type="text"
                  className="from-control"
                  style={{ width: "100%" }}
                  placeholder="Enter country name for search"
                />
                <table
                  id="example"
                  style={{ width: "100%" }}
                  className="table table-striped table-bordered"
                >
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
                    <TableRow records={records} />
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
