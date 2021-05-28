import React, { Fragment } from "react";

const TableRow = ({ records }) => {
  const covidData = records.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.country}</td>
        <td>{item.todayCases}</td>
        <td>{item.todayDeaths}</td>
        <td>{item.active}</td>
        <td>{item.critical}</td>
        <td>{item.cases}</td>
        <td>{item.deaths}</td>
        <td>{item.recovered}</td>
        <td>{item.totalTests}</td>
      </tr>
    );
  });
  return <Fragment> {covidData}</Fragment>;
};

export default TableRow;
