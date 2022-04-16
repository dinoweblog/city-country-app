import { CITY_LOADING, CITY_SUCCESS, CITY_ERROR } from "./action";

const initState = {
  loading: false,
  error: false,
  city: [],
};

export const cityReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case CITY_LOADING:
      return { ...store, loading: true };
    case CITY_SUCCESS:
      return {
        ...store,
        loading: false,
        error: false,
        city: [...payload],
      };
    case CITY_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
      };
    default:
      return store;
  }
};
