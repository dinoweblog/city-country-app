import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  cityErrorFun,
  cityLoadingFun,
  citySuccessFun,
} from "../Redux/city/action";

export const City = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const cityAdd = {
      city: city,
      population: population,
      country: country,
    };

    dispatch(cityLoadingFun);
    fetch(`https://employees-dino-app.herokuapp.com/city`, {
      method: "POST",
      body: JSON.stringify(cityAdd),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(citySuccessFun(res));
      })
      .catch((error) => dispatch(cityErrorFun()));
  };

  return (
    <div>
      <label htmlFor="">city</label>
      <input
        type="text"
        name="city"
        value={city}
        required
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="">Population</label>
      <input
        type="number"
        name="population"
        value={population}
        required
        onChange={(e) => setPopulation(e.target.value)}
      />
      <label htmlFor="">Country</label>
      <select name="country" id="" onChange={(e) => setCountry(e.target.value)}>
        <option value="Inida">India</option>
        <option value="USA">USA</option>
      </select>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Add
      </button>
    </div>
  );
};
