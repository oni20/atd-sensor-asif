import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from '@mui/material/Tooltip';

// Custom imports
import {sensorColorLegend} from '../../Utility/Constants';

export default function SensortStatusTable({
  rows,
  tableCaption = "A basic table example with a caption",
}) {
  const sensorColumnCount = Object.keys(rows[0].stream).length || 1;

  return (
    <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
      <Table aria-label="simple table">
        <caption>{tableCaption}</caption>

        {/* Table header */}
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            {/* Sensor columns */}
            {[...Array(sensorColumnCount)].map((x, i) => {
              return (
                <TableCell key={i} align="left">{`Sensor ${i + 1}`}</TableCell>
              );
            })}
            <TableCell align="left">Reported at</TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.map((sensors, idx) => {
            return (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{sensors.name || "Stream"}</TableCell>

                {Object.keys(sensors.stream).map((streamVal, i) => {
                  const status = sensors.stream[streamVal];
                  const statusClass = `status-dot ${status} status-dot--full`;

                  return (
                    <TableCell key={i} align="left">
                      <Tooltip title={sensorColorLegend[status]}>
                        <div className={statusClass}></div>
                      </Tooltip>
                    </TableCell>
                  );
                })}

                <TableCell align="left">{sensors.time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
