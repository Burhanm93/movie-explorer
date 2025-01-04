import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          height: 100,
          justifyContent: "center",
          backgroundColor: "#1a237e",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <MovieIcon sx={{ fontSize: 40, color: "#fff" }} />
            <Typography
              variant="h4"
              component="div"
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              Movie Explorer
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 2, padding: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
