import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MoviesTable() {
  const navigate = useNavigate();
  const { movies, error } = useSelector((state) => state.movies);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Title</b>
            </TableCell>
            <TableCell align="right">
              <b>Release Date</b>
            </TableCell>
            <TableCell align="right">
              <b>Imbdb ID</b>
            </TableCell>
            <TableCell align="right">
              <b>Type</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!error?.Response ? (
            movies.map((row) => (
              <TableRow
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/movie/" + row.imdbID)}
                key={row.imdbID}
              >
                <TableCell component="th" scope="row">
                  {row.Title}
                </TableCell>
                <TableCell align="right">{row.Year}</TableCell>
                <TableCell align="right">{row.imdbID}</TableCell>
                <TableCell align="right">{row.Type}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Movie not found!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MoviesTable;
