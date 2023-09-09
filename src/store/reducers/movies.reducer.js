
import { fetchMovies } from "../actions/fetchMovies.action";
import { filterMovies } from "../actions/filterMovies.action";
import { searchMovies } from "../actions/searchMovies.action";

const initialState = {
  films: [],
  searchText: "",
  year: "",
  type: "",
  all: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchMovies:
      return {
        ...state,
        films: action.payload,
      };
    case searchMovies:
      return {
        ...state,
        searchText: action.searchText,
      };
    case filterMovies:
      return {
        ...state,
        year: action.year,
        type: action.type,
        all: action.all,
      };
    default:
      return state;
  }
};

export default reducer;