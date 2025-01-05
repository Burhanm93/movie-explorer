import {
  Box,
  Card,
  CardMedia,
  Typography,
  Stack,
  Rating,
  Chip,
  Divider,
  Skeleton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import TypeChip from "../movies/components/type-chip";

export default function MovieDetailPage({ ...props }) {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(
    [id],
    async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=1d8b1833&i=${id}`
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Box sx={{ pt: 1, px: 5, maxWidth: "100%" }}>
      <Card sx={{ display: "flex", mb: 4, p: 2 }}>
        {isLoading ? (
          <Skeleton
            animation="wave"
            sx={{
              width: 350,
              height: 400,
              borderRadius: 1,
              boxShadow: 5,
            }}
          />
        ) : (
          <CardMedia
            component="img"
            sx={{
              width: 350,
              borderRadius: 1,
              boxShadow: 5,
            }}
            image={data?.Poster}
            alt="Movie Poster"
          />
        )}

        <Box sx={{ display: "flex", flexDirection: "column", ml: 3, flex: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {isLoading ? (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            ) : (
              data?.Title
            )}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Typography variant="body1">{data?.Runtime}</Typography>
            <Divider orientation="vertical" />
            <Typography variant="body1">{data?.Released}</Typography>
            <Divider orientation="vertical" />
            <Stack direction="row" spacing={1}>
              {data?.Genre?.split(",").map((g) => (
                <Chip label={g} />
              ))}
            </Stack>
            <Divider orientation="vertical" />
            <TypeChip type={data?.Type} />
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" mb={2}>
            <Rating
              value={Number(data?.imdbRating)}
              max={10}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography variant="body1">{data?.imdbRating}/10 IMDb</Typography>
            <Typography variant="caption">{data?.imdbVotes} votes</Typography>
          </Stack>

          <Divider />

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Director
            </Typography>
            <Typography variant="body1" paragraph>
              {isLoading ? (
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              ) : (
                data?.Director
              )}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Cast
            </Typography>
            <Typography variant="body1" paragraph>
              {isLoading ? (
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              ) : (
                data?.Actors
              )}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Plot
            </Typography>
            <Typography variant="body1">
              {isLoading ? (
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              ) : (
                data?.Plot
              )}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
