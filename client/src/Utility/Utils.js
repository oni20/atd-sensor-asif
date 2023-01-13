import axios from "axios";

// Fetcher function for REST API Call
export const getFetcher = (url) => axios.get(url).then((res) => res.data);

// Get normalized Sensor status
export const getSensorStatus = (sensorData = []) => {
  if (!sensorData) return [];
  const normalizedSensorList = [];

  sensorData.forEach((sensor) => {
    const { streamId, name = "Stream", data, time } = sensor;
    const sensorObj = {
      streamId,
      name,
      time: new Date(time).toDateString(),
      stream: {},
    };
    const streamLength = data.length;
    const lastStreamDataArr = data[streamLength - 1].split("");
    const sensorCount = lastStreamDataArr.length;

    for (let index = 0; index < sensorCount; index++) {
      if (lastStreamDataArr[index] === "0") {
        // Get all red sensors
        sensorObj.stream[index] = "red";
      } else {
        const count = data
          .map((binary, idx) => binary.charAt(index))
          .reduce((acc, num) => Number(acc) + Number(num), []);

        sensorObj.stream[index] = count === streamLength ? "green" : "yellow";
      }
    }

    normalizedSensorList.push(sensorObj);
  });

  return normalizedSensorList;
};
