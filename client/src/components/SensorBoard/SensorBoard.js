import React from "react";
import { Box, Grid, Chip, Stack, Typography } from "@mui/material";
import useSWR from "swr";

// Custom component
import { getFetcher, getSensorStatus } from "../../Utility/Utils";
import { sensorColorLegend } from "../../Utility/Constants";
import Spinner from "../Spinner/Spinner";
import SensortStatusTable from "../SensortStatusTable/SensortStatusTable";
import AlertMessage from "../AlertMessage/AlertMessage";

function SensorBoard() {
  const { data, error } = useSWR("/atdSensor", getFetcher);

  // Show error message on UI level if
  if (error) {
    return (
      <AlertMessage severity="error" message="Failed! to fetch sensor data" />
    );
  }

  if (!data) return <Spinner />;

  const rowData = getSensorStatus(data?.atdSensorData);

  return (
    <Box sx={{ flexGrow: 1, pt: 6 }}>
      {rowData.length ? (
        <>
          <Typography variant="subtitle2" gutterBottom>
            List of color legends for stream status
          </Typography>

          <Stack mb={2} direction="row" spacing={1}>
            {Object.keys(sensorColorLegend).map((sensorColor, id) => {
              return (
                <Chip
                  label={sensorColorLegend[sensorColor]}
                  className={sensorColor}
                />
              );
            })}
          </Stack>

          <Grid container spacing={2}>
            <SensortStatusTable
              rows={rowData}
              tableCaption={`Sensor status tablular data`}
            />
          </Grid>
        </>
      ) : (
        <AlertMessage
          severity="info"
          message="No stream data is available to show"
        />
      )}
    </Box>
  );
}

export default React.memo(SensorBoard);
