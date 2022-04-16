import { COUNTRY_LOADING, COUNTRY_SUCCESS, COUNTRY_ERROR } from "./action";

const initState = {
  loading: false,
  error: false,
  isAuthenticated: false,
};

export const countryReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case COUNTRY_LOADING:
      return { ...store, loading: ture };
    case COUNTRY_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        isAuthenticated: true,
      };
    case COUNTRY_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
        isAuthenticated: true,
      };
    default:
      return store;
  }
};
