import React from "react";

const Countries = ({ countries, onChange }) => {
  const handleChange = (e) => {
    debugger;
    onChange(e.target.value);
  };

  return (
    <select
      className="form-control"
      style={{ width: "100%" }}
      onChange={handleChange}
    >
      {countries.map((country, index) => (
        <option key={index}>{country.name}</option>
      ))}
    </select>
  );
};

export default Countries;
