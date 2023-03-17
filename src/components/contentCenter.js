import { Chart } from "chart.js";
import styled from "styled-components";
const BigDiv = styled.div`
  width: 1208px;
  height: 1275px;
  background: #dbdfe1;
  /* Grey */

  border: 1px solid #dbdfe1;
  border-radius: 4px;
  background-color: gray;
  /* display: flex; */
  margin: auto;
`;
function Center(props) {
  return <BigDiv>{props.children}</BigDiv>;
}

export default Center;
