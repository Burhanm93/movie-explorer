import React from "react";
import { Box, Typography, Skeleton, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MovieCard from "./movie-card";

const GridView = ({ movies, isLoading }) => {
  return (
    <Paper elevation={1} sx={{ padding: 2, minHeight: "70vh" }}>
      <Grid container spacing={5}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Grid size={{ xs: 12, sm: 3, md: 3 }} key={index}>
                <Box
                  sx={{
                    width: "95%",
                    height: 550,
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

        {!movies?.Search && !isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography variant="caption">No result found.</Typography>
          </Box>
        )}
      </Grid>
    </Paper>
  );
};

export default GridView;
