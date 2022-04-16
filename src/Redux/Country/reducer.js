import { COUNTRY_LOADING, COUNTRY_SUCCESS, COUNTRY_ERROR } from "./action";

const initState = {
  loading: false,
  error: false,
  country: [],
};

export const countryReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case COUNTRY_LOADING:
      return { ...store, loading: true };
    case COUNTRY_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        country: [...payload],
      };
    case COUNTRY_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
      };
    default:
      return store;
  }
};
