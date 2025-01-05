import {
  Box,
  Link,
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
import { useNavigate } from "react-router-dom";

export default function TableView({ movies, pageSize, isLoading }) {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: "#f9f9f9" }}>
      <Table sx={{ minHeight: 700 }}>
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
                      <Box sx={{ width: "100%", height: 50 }}>
                        <Skeleton animation="wave" />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
            : movies?.Search?.map((row) => (
                <TableRow key={row.imdbID} sx={{ height: 50 }}>
                  <TableCell sx={{ width: "120px" }}>
                    <Box
                      component="img"
                      src={row.Poster}
                      alt={`${row.Title} poster`}
                      onClick={() => navigate(`movie/${row?.imdbID}`)}
                      sx={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: 2,
                        height: "150px",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                          cursor: "pointer",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Link
                      component="button"
                      onClick={() => navigate(`movie/${row?.imdbID}`)}
                      underline="hover"
                    >
                      <Typography variant="body1">{row.Title}</Typography>
                    </Link>
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
