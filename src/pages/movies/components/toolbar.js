import { AppsOutlined, FormatListBulletedOutlined } from "@mui/icons-material";
import {
  Alert,
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from "@mui/material";

export default function Toolbar({
  onSetYearFilter,
  onSetTypeFilter,
  onSetWordFilter,
  onSetViewMode,
  viewMode,
  filters,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          sx={{ width: 250 }}
          variant="outlined"
          placeholder="Search movies..."
          size="medium"
          defaultValue={filters?.word}
          onChange={(event) => onSetWordFilter(event.target.value || null)}
        />

        <Autocomplete
          sx={{ width: 250 }}
          options={Array.from({ length: 50 }, (_, index) => {
            const year = `${new Date().getFullYear() - index}`;
            return year;
          })}
          freeSolo
          value={filters?.year || ""}
          onChange={(event, value) => {
            onSetYearFilter(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Year"
              placeholder="Select or type a year"
            />
          )}
        />

        <FormControl sx={{ width: 250 }}>
          <InputLabel>Type</InputLabel>
          <Select
            sx={{ width: 250 }}
            value={filters?.type || ""}
            label="Type"
            onChange={(event) => {
              onSetTypeFilter(event.target?.value);
            }}
            displayEmpty
            renderValue={(selected) => selected || null}
            defaultValue=""
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"movie"}>Movie</MenuItem>
            <MenuItem value={"series"}>Serie</MenuItem>
            <MenuItem value={"episode"}>Serie Episode</MenuItem>
          </Select>
        </FormControl>
        {!filters?.word && (
          <Alert severity="info">
            Please search for movies or other tv shows
          </Alert>
        )}
      </Box>

      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={(event, newViewMode) => onSetViewMode(newViewMode)}
        size="medium"
      >
        <ToggleButton value="table">
          <Tooltip title="Table View">
            <FormatListBulletedOutlined />
          </Tooltip>
        </ToggleButton>
        <ToggleButton value="grid">
          <Tooltip title="Grid View">
            <AppsOutlined />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
