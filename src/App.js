import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";

import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/:imdbId" element={<MovieDetails/>}></Route>
            <Route
              path="*"
              element={
                <p>Page not found</p>
              }
            />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
