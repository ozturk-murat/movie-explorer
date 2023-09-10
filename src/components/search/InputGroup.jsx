import { Button, Grid } from "@mui/material";
import SearchTextField from "./SearchTextField";
import MovieTypeFilter from "./MovieTypeFilter";
import YearPicker from "./YearPicker";

function InputGroup({ searchHandler }) {

  const handleSubmitClick = () => {
    searchHandler();
  };

  return (
    <Grid container spacing={3} mb={5}>
      <Grid item xs={12} sm={9} md={10} lg={6}>
        <SearchTextField />
      </Grid>
      <Grid item xs={4} sm={3} md={2} lg={2}>
        <YearPicker />
      </Grid>
      <Grid item xs={8} sm={6} md={4} lg={3}>
        <MovieTypeFilter />
      </Grid>
      <Grid item xs={3} sm={6} md={4} lg={1}>
        <Button
          variant="outlined"
          size="large"
          onClick={handleSubmitClick}
          sx={{ height: 56 }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default InputGroup;
