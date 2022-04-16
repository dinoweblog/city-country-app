export const CITY_LOADING = "CITY_LOADING";
export const CITY_SUCCESS = "CITY_SUCCESS";
export const CITY_ERROR = "CITY_ERROR";

export const cityLoadingFun = () => {
  type: CITY_LOADING;
};

export const citySuccessFun = (payload) => {
  type: CITY_SUCCESS, payload;
};

export const cityErrorFun = () => {
  type: CITY_SUCCESS;
};
