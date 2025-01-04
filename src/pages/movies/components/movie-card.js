import { Box, Chip, Typography } from "@mui/material";
import TypeChip from "./type-chip";

export default function MovieCard({ movie }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 1,
        backgroundColor: "#f9f9f9",
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        position: "relative",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        height: 550,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          margin: 1,
        }}
      >
        <TypeChip type={movie.Type} />
      </Box>

      <Box
        component="img"
        src={movie.Poster}
        alt={movie.Title}
        sx={{
          width: "100%",
          height: 500,
          objectFit: "cover",
          borderRadius: 2,
          marginBottom: 1,
        }}
      />
      <Typography variant="body1" fontWeight="bold">
        {movie.Title}
      </Typography>

      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          right: 8,
          margin: 1,
        }}
      >
        <Chip label={movie.Year} color="info" />
      </Box>
    </Box>
  );
}
