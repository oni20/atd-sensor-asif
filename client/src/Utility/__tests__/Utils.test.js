import { getSensorStatus } from "../Utils";
import { mockATDSensorData } from "../mockData/mock";

test("Should normalize sensor status data", () => {
  const expectedResult = [
    {
      streamId: 1,
      name: "Stream 1",
      time: "time",
      stream: {
        0: "green",
        1: "green",
        2: "green",
        3: "green",
        4: "green",
        5: "red",
        6: "yellow",
        7: "red",
        8: "green",
      },
      time: "Thu Jan 12 2023",
    },
  ];

  const normalizedSensorList = getSensorStatus(mockATDSensorData);
  expect(normalizedSensorList).toEqual(expectedResult);
});

test("Should return empty sensor status data if parameter is empty", () => {
  const expectedResult = [];
  const normalizedSensorList = getSensorStatus([]);
  expect(normalizedSensorList).toEqual(expectedResult);
});
