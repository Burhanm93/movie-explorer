import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TypeChip from "./type-chip";

export default function TableView({ movies, pageSize, isLoading }) {
  return (
    <TableContainer component={Paper} sx={{ height: "80vh", overflow: "auto" }}>
      <Table sx={{ minWidth: 650, minHeight: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5"> Cover</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5"> Title</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Type</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">Release Year</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h5">IMDB ID</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading
            ? Array(pageSize)
                .fill()
                .map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={5}>
                      <Box sx={{ width: "100%" }}>
                        <Skeleton animation="wave" />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
            : movies?.Search?.map((row) => (
                <TableRow key={row.imdbID}>
                  <TableCell sx={{ width: "120px" }}>
                    <img
                      src={row.Poster}
                      alt={`${row.Title} poster`}
                      style={{
                        maxHeight: "150px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        objectFit: "cover",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{row.Title}</Typography>
                  </TableCell>
                  <TableCell>
                    <TypeChip type={row.Type} />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{row.Year}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1"> {row.imdbID}</Typography>
                  </TableCell>
                </TableRow>
              ))}

          {!movies?.Search && !isLoading && (
            <TableRow>
              <TableCell colSpan={5}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="caption">No result found.</Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
