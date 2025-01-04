import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Box, Pagination } from "@mui/material";
import GridView from "./components/grid-view";
import TableView from "./components/table-view";
import { debounce } from "lodash";
import Toolbar from "./components/toolbar";

export default function MoviesPage({ ...props }) {
  const pageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [viewMode, setViewMode] = useState("table");
  const [filters, setFilters] = useState({
    year: null,
    word: "pokemon",
    type: null,
  });

  const { data, isLoading, error } = useQuery(
    ["movies", currentPage, filters],
    async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=1d8b1833&page=${currentPage}&s=${
          filters?.word || ""
        }&y=${filters?.year || ""}&type=${filters?.type || ""}`
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) =>
        setTotalPages(Math.ceil(Number(data?.totalResults) / pageSize)),
    }
  );

  const debouncedSearch = useCallback(
    debounce((query) => {
      setFilters((prev) => ({ ...prev, word: query }));
      setCurrentPage(1);
    }, 600),
    []
  );

  return (
    <Box>
      <Toolbar
        onSetTypeFilter={(value) => {
          setFilters((prev) => ({
            ...prev,
            type: value || null,
          }));
          setCurrentPage(1);
        }}
        onSetYearFilter={(value) => {
          setFilters((prev) => ({
            ...prev,
            year: value || null,
          }));
          setCurrentPage(1);
        }}
        onSetWordFilter={(value) => {
          debouncedSearch(value || null);
        }}
        onSetViewMode={(value) => setViewMode(value)}
        viewMode={viewMode}
        filters={filters}
      />
      {viewMode === "table" ? (
        <TableView movies={data} isLoading={isLoading} pageSize={pageSize} />
      ) : (
        <GridView movies={data} isLoading={isLoading} />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          color="primary"
        />
      </Box>
    </Box>
  );
}
