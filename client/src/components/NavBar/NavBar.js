import React from "react";
import AppBar from "@mui/material/AppBar";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <AppBar position="relative" data-testid="navBar">
      <Toolbar>
        <QueryStatsIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          ATD Diagnostic Logbook
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
