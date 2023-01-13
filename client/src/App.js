import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Import custom components
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import SensorBoard from "./components/SensorBoard/SensorBoard";
import Footer from "./components/Footer/Footer";

// Import style files
import '../src/styles/style.css'

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <Layout>
          <Typography
            mt={2}
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            ATD Sensor status dashboard
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            An anthropomorphic test device (ATD), — commonly known as a crash
            test dummy — is a high-precision test instrument used to measure
            human injury potential in vehicle crashes. Each ATD can potentially
            comprise hundreds of sensors.
          </Typography>

          <SensorBoard />
        </Layout>
      </main>

      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
