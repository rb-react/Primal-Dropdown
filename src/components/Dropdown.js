import React, { useEffect, useState } from "react";
import { countries, state, cities } from "./data";

const Dropdown = () => {
  const [country, setCountry] = useState([]);
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCountry(countries);
  }, []);

  const handleCountry = (id) => {
    const dt = state.filter((n) => n.countryId === id);
    setStates(dt);
  };

  const handleState = (id) => {
    const dt = cities.filter((n) => n.stateId === id);
    setCity(dt);
  };

  return (
    <div className="App">
      <select
        id="dCountry"
        className="form-control select-class"
        onChange={(e) => {
          handleCountry(e.target.value);
        }}
      >
        <option value="0">Select Country</option>
        {country && country !== undefined
          ? country.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No Country"}
      </select>
      <br />
      <br />
      <select
        id="dState"
        className="form-control select-class"
        onChange={(e) => {
          handleState(e.target.value);
        }}
      >
        <option value="0">Select State</option>
        {states && states !== undefined
          ? states.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No Country"}
      </select>
      <br />
      <br />
      <select id="dCity" className="form-control select-class">
        <option value="0">Select City</option>
        {city && city !== undefined
          ? city.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No Country"}
      </select>
    </div>
  );
};

export default Dropdown;
