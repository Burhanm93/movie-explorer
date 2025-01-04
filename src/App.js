import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/movies";
import MovieDetailPage from "./pages/movie-detail";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./layout";

function App() {
  const queryClient = new QueryClient();
  //TODO: 404 çalışmıyor
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MoviesPage />} />
            <Route path="movie/:id" element={<MovieDetailPage />} />
          </Route>

          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
