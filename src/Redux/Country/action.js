export const COUNTRY_LOADING = "COUNTRY_LOADING";
export const COUNTRY_SUCCESS = "COUNTRY_SUCCESS";
export const COUNTRY_ERROR = "COUNTRY_ERROR";

export const countryLoadingFun = () => {
  type: COUNTRY_LOADING;
};

export const countrySuccessFun = (payload) => {
  type: COUNTRY_SUCCESS, payload;
};

export const countryErrorFun = () => {
  type: COUNTRY_SUCCESS;
};
