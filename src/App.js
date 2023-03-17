import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import GlobalStyle from "./components/GlobalStyles";
import TraCuu from "./components/tracuu";
import Center from "./components/contentCenter";
import Chart from "./components/chart";
import Table from "./components/Table";
import styled from "styled-components";
import ChartBottom from "./components/ChartBottom";
// import { Chart } from "chart.js";
function App() {
  const StyleDiv = styled.div`
    background: #ffffff;
    border-radius: 4px;
    width: 1128px;
    height: 495px;
    display: flex;
    margin: 0 auto;
    margin-top: 24px;
    margin-bottom: 20px;
  `;
  return (
    <div className="App">
      <GlobalStyle>
        <TraCuu />
        <Center>
          <Nav />
          <StyleDiv>
            <Chart />
          </StyleDiv>
          <Table />
          <ChartBottom />
        </Center>
      </GlobalStyle>
    </div>
  );
}

export default App;
