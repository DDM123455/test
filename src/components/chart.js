import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { data1, labels } from "../data/data.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useRef, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      backgroundColor: "red",
      borderColor: "none",
      align: "end",
    },
  },
};
const divLineChart = styled.div`
  background-color: white;
`;
const LineChart = styled.div`
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  width: 1085px;
  /* & canvas {
    width: 1068px !important;
    height: 495px;
  } */

  /* height: 495px; */
  padding: 10px 23px;
  position: relative;
`;
const DivTop = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* line-height: 24px; */
  width: 148px;
  height: 24px;
  display: flex;
  /* -webkit-box-align: center; */
  /* align-items: center; */
  /* text-align: center; */
  justify-content: center;
  line-height: 24px;
  /* position: absolute; */
  background-color: rgb(10, 59, 50);
  color: rgb(255, 255, 255);
`;
const ContainerDiv = styled.div`
  position: absolute;
  border-radius: 4px 4px 0px 0px;

  display: inline-block;
  top: 17px;
  height: 50px;
  left: 365px;
  border: 1px solid #e87722;
  text-align: center;
`;
const neW = [
  {
    label: "Quỹ cân bằng",
    data: [3, 4, 6, 8, 4],
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "#6ECEB2",
  },
  {
    label: "Quỹ tăng trưởng",
    data: [3, 2, 7, 8, 0, 7],
    borderColor: "rgb(53, 162, 235)",
    backgroundColor: "#E87722",
  },
  {
    label: "Quỹ bảo toàn",
    data: [0, 9, 1, 8, 0, 3],
    borderColor: "rgb(53, 162, 2)",
    border: "none",
    backgroundColor: "#FED141",
  },
];

var data = {
  labels: labels,
  Legend: {
    borderColor: "none",
  },
  datasets: neW,
};

setInterval(() => {
  data.datasets = [
    {
      label: "Quỹ cân bằng",
      data: [9, 4, 6, 8, 4],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#6ECEB2",
    },
    {
      label: "Quỹ tăng trưởng",
      data: [9, 2, 7, 8, 0, 7],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "#E87722",
    },
    {
      label: "Quỹ bảo toàn",
      data: [9, 9, 1, 8, 0, 3],
      borderColor: "rgb(53, 162, 2)",
      border: "none",
      backgroundColor: "#FED141",
    },
  ];
}, 5000);
function Chart() {
  const [dataState, setData] = useState([]);
  console.log(dataState.datasets);

  let index = 0;

  let interval = setInterval(function () {
    // Lấy 3 phần tử từ mảng
    var slice = data1.datasets.slice(index, index + 2);

    // Kiểm tra nếu không còn phần tử nào trong mảng thì dừng lại
    if (slice.length === 0) {
      index = 0;
      return;
    }

    // In ra 3 phần tử được lấy ra từ mảng
    setData(slice);
    console.log(slice);

    // Tăng giá trị của biến index lên 3 để lấy 3 phần tử tiếp theo trong mảng
    index += 2;
  }, 5000);

  const ref = useRef();

  return (
    <LineChart>
      <ContainerDiv>
        <DivTop>Ngày: 20/07/2020</DivTop>
        <div style={{ color: "#0A3B32" }}>Giá trị quỹ: 335.00 </div>
      </ContainerDiv>
      <Line ref={ref} datasetIdKey="id" data={data} options={options} />
    </LineChart>
  );
}

export default Chart;
