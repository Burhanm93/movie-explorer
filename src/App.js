import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/movies";
import MovieDetailPage from "./pages/movie-detail";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./layout";
import theme from "./styles/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<MoviesPage />} />
              <Route path="movie/:id" element={<MovieDetailPage />} />
            </Route>
            <Route path="*" element={<div>404: Page Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
