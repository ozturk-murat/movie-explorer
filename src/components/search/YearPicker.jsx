import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchParams } from "../../redux/reducers/moviesSlice";

function YearPicker() {
  const dispatch = useDispatch();
  const { searchParams } = useSelector((state) => state.movies);

  const handleYearChange = (newDate) => {
    if (newDate) {
      const selectedYear = newDate.$y;

      dispatch(
        updateSearchParams({
          ...searchParams,
          year: selectedYear,
        })
      );
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={"All Time"}
        views={["year"]}
        openTo="year"
        onChange={handleYearChange}
        slotProps={{
          textField: {
            variant: "outlined",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default YearPicker;
