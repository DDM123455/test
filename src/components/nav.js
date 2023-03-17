import { Chart } from "chart.js";
import styled from "styled-components";
import ChartICon from "../svg/ChartIcon";
import IconChart from "../svg/Group.svg";
import IconCa from "../svg/Group949.svg";
const NavBar = styled.nav`
  background-color: white;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 30px;
  width: 1128px;
  height: 68px;
  & .left {
    align-items: center;
    display: flex;
    width: 721px;
  }

  display: flex;
  justify-content: space-between;
  line-height: 68px;
`;

const Button = styled.button`
  background-color: orange;
  width: 139px;
  height: 44px;
  background: #e87722;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  color: white;
`;
const Icon = styled.i`
  color: orange;
  font-size: 21px;
`;
const DivNav = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Icondiv = styled.div`
  display: flex;
  justify-content: space-around;
  & i {
    color: #0a3b32;
    width: 17.01px;
    height: 1.17px;
  }
  width: 106px;
`;
const Container = styled.div`
  display: flex;
  /* margin: auto; */
  justify-content: center;
`;
const Allfund = styled.div`
  box-sizing: border-box;

  width: 236px;
  height: 44px;

  background: #ffffff;
  line-height: 44px;
  & i {
    color: #0a3b32;
  }

  border: 1px solid #dbdfe1;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const DateeStyle = styled.div`
  box-sizing: border-box;

  width: 275px;
  height: 44px;
  line-height: 44px;

  background: #ffffff;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & i {
    color: #0a3b32;
  }
`;

function Nav() {
  return (
    <Container>
      <NavBar>
        <div className="left">
          <DivNav>
            <Allfund>
              Tất cả các quỹ
              <div>
                <i className="fa-solid fa-caret-down"></i>
              </div>
            </Allfund>
            <DateeStyle>
              01/07/2020 - 10/08/2020 <i className="fa-regular fa-calendar"></i>
            </DateeStyle>
            <Button> Tra Cứu</Button>
          </DivNav>
        </div>
        <Icondiv>
          <Icon>
            <img alt="chart" src={IconChart} />
          </Icon>
          <Icon>
            <img alt="Ca" src={IconCa} />
          </Icon>
        </Icondiv>
      </NavBar>
    </Container>
  );
}

export default Nav;
