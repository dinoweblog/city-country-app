import { useState } from "react";
import { useDispatch, useStore } from "react-redux";
import styled from "styled-components";
import {
  countryErrorFun,
  countryLoadingFun,
  countrySuccessFun,
} from "../Redux/Country/action";

const Div = styled.div`
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: #e9e9e9;
  box-sizing: border-box;
  padding: 2%;
  border-radius: 8px;
  margin-top: 30px;
  input,
  select {
    height: 33px;
    padding-left: 15px;
    outline: none;
  }
  button {
    height: 38px;
    border: none;
    background-color: tomato;
    color: white;
    :hover {
      opacity: 0.9;
    }
  }
  label {
    font-size: 18px;
    margin-bottom: -18px;
  }
`;

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
    <Div>
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
    </Div>
  );
};
