import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Bar, Line } from "react-chartjs-2";
import styled from "styled-components";

function ChartBottom() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    ChartDataLabels,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  );
  const DivTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    background-color: #6eceb2;
    height: 52px;
    width: 1128px;
    background: #6eceb2;
    border-radius: 4px 4px 0px 0px;

    /* identical to box height, or 120% */

    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    text-align: center;
  `;
  const ContainerDiv = styled.div`
    /* display: flex;
    justify-content: center; */
    border-radius: 4px;
    background-color: white;
    & .Bar2 {
      display: flex;
      & .right {
        display: flex;
        width: 563px;
        justify-content: space-around;
        margin-top: 20px;
        & .rightrow1 {
          display: inline-flex;
          width: 196px;
          height: 44px;
          background-color: white;
          border: 1px solid #dbdfe1;
          justify-content: space-around;
          align-items: center;
          i {
            color: #0a3b32;
          }
        }
        span {
          width: 102px;
          height: 38px;
          left: 750px;
          top: 1274px;

          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 38px;
          /* identical to box height */

          /* Dark Green */

          color: #0a3b32;
        }
      }
      & .right2 {
        display: flex;
        justify-content: space-around;
        & .Child1 {
          margin-left: -44px;
          width: 155px;
          text-align: initial;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          /* identical to box height, or 144% */

          /* Dark green */
          margin-top: 21px;

          color: #0a3b32;
        }
        & .Child2 {
          margin-right: -46px;
          margin-top: 20px;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 26px;
          /* identical to box height, or 162% */

          display: flex;
          align-items: center;
          text-align: right;

          /* Dark green */

          color: #0a3b32;
        }
      }
    }
    & .Bar1 {
      height: 300px;
      width: 563px;
      border-right: 1px solid #6eceb2;
    }
    & .left {
      position: absolute;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      bottom: 240px;
      left: 27px;
      & .first {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 38px;
        color: #0a3b32;
      }
    }
  `;

  //   const labels = Utils.months({ count: 7 });
  const labels = ["", "", ""];
  // const datasets = [
  //   {
  //     id: 1,
  //     label: "",
  //     data: [5, 6, 7],
  //   },
  //   {
  //     id: 2,
  //     label: "",
  //     data: [3, 2, 1],
  //   },
  // ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [75, 0, 0],
        backgroundColor: ["#E87722"],
      },
      {
        data: [0, -25, 0],
        backgroundColor: ["#6ECEB2"],
      },
      {
        data: [0, 0, 25],
        backgroundColor: ["#FED141"],
      },
    ],
  };
  // </block:setup>

  // <block:config:0>

  const options = {
    indexAxis: "y",
    showTooltips: false,
    type: "bar",
    data: data,

    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#0a3b32",
        maintainAspectRatio: false,

        font: {
          weight: "bold",
          size: "15px",
        },
        anchor: "start",
        align: "start",
        padding: { bottom: 90 },
        offset: function (value) {
          const dataValue = value.dataset.data[value.dataIndex];

          return dataValue > 0 ? -40 : 0;
        },
        formatter: function (value, context) {
          return value == 0 ? "" : value + "%";
        },
      },
    },
    barPercentage: 2,

    scales: {
      x: {
        min: -50,
        max: 100,
      },
      y: {
        grid: { color: "transparent" },
      },
    },
  };
  const BigestDiv = styled.div`
    background: rgb(255, 255, 255);
    position: absolute;
    left: 50%;
    border-radius: 4px;
    transform: translateX(-50%);
    border-radius: 4px 4px 0px 0px;

    width: 1128px;
  `;
  const BarDiv = styled.div`
    height: 150px;

    /* display: flex; */
    display: inline-block;
    /* justify-content: center; */
    margin-top: 66px;
    padding-bottom: 10px;
    margin-left: 250px;
    width: 300px;
  `;
  const ContentDiv = styled.div`
    position: absolute;
    top: 141px;
    left: 32px;
    height: 500px;
  `;

  return (
    <BigestDiv>
      <ContainerDiv>
        <DivTitle>Thay đổi giá trị quỹ</DivTitle>
        <div className="Bar2">
          <div className="Bar1">
            <BarDiv>
              <Bar plugins={[ChartDataLabels]} options={options} data={data} />
            </BarDiv>
            <div className="left">
              <div className="first">Từ lúc thành lập quỹ</div>
            </div>
            {/* <ContentDiv>
              <div>Quỹ Tăng trưởng</div>
              <div>Quỹ Cân bằng</div>
              <div>Quỹ Bảo toàn</div>
            </ContentDiv> */}
            <div>
              <div
                className="right2"
                style={{
                  display: "block",
                  position: "absolute",
                  top: 119 + "px",
                  left: 74 + "px",
                }}
              >
                <div className="Child1">Quỹ Tăng trưởng</div>
                <div className="Child1">Quỹ Cân bằng</div>
                <div className="Child1">Quỹ Bảo toàn</div>
              </div>
            </div>
          </div>
          <div>
            <div className="right">
              <div>
                <span>Thời gian</span>
              </div>
              <div className="rightrow1">
                <div>6 tháng qua</div>
                <div>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="right2">
                <div className="Child1">Quỹ Tăng trưởng</div>
                <div className="Child2">+5.87%</div>
              </div>
            </div>
            <div>
              <div className="right2">
                <div className="Child1">Quỹ Cân bằng</div>
                <div className="Child2">+5.87%</div>
              </div>
            </div>
            <div>
              <div className="right2">
                <div className="Child1">Quỹ Bảo toàn</div>
                <div className="Child2">+5.87%</div>
              </div>
            </div>
          </div>
        </div>
      </ContainerDiv>
    </BigestDiv>
  );
}

export default ChartBottom;
