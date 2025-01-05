import { Chip } from "@mui/material";

export default function TypeChip({ type }) {
  const typeColors = {
    movie: "#80d16e",
    series: "#6eb6d1",
    episode: "#a56ed1",
  };
  return (
    <Chip
      label={type}
      sx={{
        backgroundColor: typeColors[type],
        color: "white",
      }}
    />
  );
}
