import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import {
  countryErrorFun,
  countryLoadingFun,
  countrySuccessFun,
} from "../Redux/Country/action";

export const Country = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const countryAdd = {
      country: country,
    };

    dispatch(countryLoadingFun);
    fetch(`https://employees-dino-app.herokuapp.com/country`, {
      method: "POST",
      body: JSON.stringify(countryAdd),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(countrySuccessFun(res));
      })
      .catch((error) => dispatch(countryErrorFun()));
  };

  return (
    <div>
      <label htmlFor="">Country</label>
      <input
        type="text"
        name="country"
        value={country}
        required
        onChange={(e) => setCountry(e.target.value)}
      />
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
