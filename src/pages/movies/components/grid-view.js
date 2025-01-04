import React from "react";
import { Box, Typography, Skeleton, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TypeChip from "./type-chip";
import MovieCard from "./movie-card";

const GridView = ({ movies, isLoading }) => {
  return (
    <Paper elevation={1} sx={{ padding: 2 }}>
      <Grid container spacing={5}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Grid size={{ xs: 12, sm: 4, md: 4 }} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 2,
                  }}
                >
                  <Skeleton variant="rectangular" width="100%" height="100%" />
                </Box>
              </Grid>
            ))
          : movies?.Search?.map((movie) => (
              <Grid size={{ xs: 12, sm: 3, md: 3 }} key={movie.imdbID}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
      </Grid>
    </Paper>
  );
};

export default GridView;
