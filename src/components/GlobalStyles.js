import styled from "styled-components";
const GGlobalStyle = styled.div`
  width: 100%;
  height: 100%;
  color: red;
`;
function GlobalStyle(props) {
  return <GGlobalStyle>{props.children}</GGlobalStyle>;
}

export default GlobalStyle;
