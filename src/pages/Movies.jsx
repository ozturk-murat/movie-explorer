import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../services/api";
import InputGroup from "../components/search/InputGroup";
import MoviesTable from "../components/table/MoviesTable";
import TableSkeleton from "../components/table/TableSkeleton";
import { Pagination } from "@mui/material";
import {
  setMovies,
  updateSearchParams,
  setError,
  setLoading,
} from "../redux/reducers/moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { searchParams, loading } = useSelector((state) => state.movies);
  const { page } = useSelector((state) => state.movies.searchParams);
  const [totalResults, setTotalResults] = useState(0);
  const totalPages = Math.ceil(totalResults / 10);

  useEffect(() => {
    handleSearch();
  }, [updateSearchParams, page]);

  const handleSearch = () => {
    dispatch(setLoading(true));
    getMovies({
      text: searchParams.text,
      year: searchParams.year,
      type: searchParams.type,
      page: searchParams.page,
    })
      .then((response) => {
        dispatch(setLoading(false));
        if (response.Response && response.Error) {
          dispatch(setError(response));
        } else {
          dispatch(setMovies(response.Search));
          setTotalResults(response.totalResults);
          dispatch(setError(null));
        }
      })
      .catch((error) => {
        dispatch(setLoading(false));
      });
  };

  const handlePageChange = (event, value) => {
    dispatch(
      updateSearchParams({
        ...searchParams,
        page: value,
      })
    );
  };

  return (
    <div>
      <InputGroup searchHandler={handleSearch} />
      {loading ? <TableSkeleton /> : <MoviesTable />}
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      />
    </div>
  );
};

export default Movies;
