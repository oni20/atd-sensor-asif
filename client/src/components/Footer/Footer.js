import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function Footer() {
  const Copyright = () => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Website link
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };
  return (
    <Box
      sx={{ bgcolor: "background.paper", p: 6 }}
      component="footer"
      data-testid="footer"
    >
      <Typography variant="h6" align="center" gutterBottom>
        ATD Sensor diagnostic dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Some descriptio here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  );
}
