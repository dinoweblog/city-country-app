export const CITY_LOADING = "CITY_LOADING";
export const CITY_SUCCESS = "CITY_SUCCESS";
export const CITY_ERROR = "CITY_ERROR";

export const cityLoadingFun = () => ({
  type: CITY_LOADING,
});

export const citySuccessFun = (payload) => ({
  type: CITY_SUCCESS,
  payload,
});

export const cityErrorFun = () => ({
  type: CITY_SUCCESS,
});

export const getCityData = () => (dispatch) => {
  dispatch(cityLoadingFun());
  fetch(`http://localhost:3000/city`)
    .then((res) => res.json())
    .then((res) => {
      dispatch(citySuccessFun(res));
    })
    .catch((error) => dispatch(cityErrorFun()));
};

const handleSubmit = () => {
  const cityAdd = {
    city: city,
    population: population,
    country: ctry,
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
