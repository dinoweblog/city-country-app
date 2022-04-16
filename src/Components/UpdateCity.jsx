import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  citySuccessFun,
  cityErrorFun,
  cityLoadingFun,
  getCityData,
} from "../Redux/City/action";

import { getCountryData } from "../Redux/Country/action";

const Div = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 2%;
  border-radius: 8px;
  input,
  select {
    height: 32px;
    padding-left: 10px;
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
    font-size: 15px;
  }
`;

export const UpdateCity = ({ id, setShowModal, showModal }) => {
  const [city, setCity] = useState("");
  const [ctry, setCountry] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { country } = useSelector((state) => state.country);

  const funCall = () => {
    dispatch(getCountryData());
  };
  const fetchData = () => {
    dispatch(getCityData());
  };
  useEffect(() => {
    funCall();
    fetchData();
  }, [showModal]);

  const handleSubmit = () => {
    const cityAdd = {
      city: city,
      population: population,
      country: ctry,
    };

    dispatch(cityLoadingFun);
    fetch(`https://employees-dino-app.herokuapp.com/city/${id}`, {
      method: "PUT",
      body: JSON.stringify(cityAdd),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(citySuccessFun(res));
        fetchData();
      })
      .catch((error) => dispatch(cityErrorFun()));
  };

  return (
    <Div>
      <label htmlFor="">City</label>
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
        <option value={""}></option>
        {country.map((e) => (
          <option value={e.country}>{e.country}</option>
        ))}
      </select>
      <button
        onClick={() => {
          handleSubmit();
          setShowModal((prev) => !prev);
        }}
      >
        Update
      </button>
    </Div>
  );
};
