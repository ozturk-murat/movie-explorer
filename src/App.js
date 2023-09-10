import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Container, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Header from "./components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Header/>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
            <Route
              path="*"
              element={<p>Page not found</p>}
            />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
