import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton } from "@mui/material";

function TableSkeleton() {
  const row = 10;
  const cell = 10;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Array.from({ length: row }).map((_, index) => (
              <TableCell key={index}>
                <Skeleton
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: row }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {Array.from({ length: cell }).map((_, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Skeleton
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableSkeleton;
