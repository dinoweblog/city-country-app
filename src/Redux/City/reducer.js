import { CITY_LOADING, CITY_SUCCESS, CITY_ERROR } from "./action";

const initState = {
  loading: false,
  error: false,
  isAuthenticated: false,
};

export const cityReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case CITY_LOADING:
      return { ...store, loading: ture };
    case CITY_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        isAuthenticated: true,
      };
    case CITY_ERROR:
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
