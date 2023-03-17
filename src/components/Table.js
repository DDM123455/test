import styled from "styled-components";
function Table() {
  const Table = styled.table`
    width: 1128px;
    th:nth-child(1) {
      text-align: justify;
      padding-left: 20px;
      width: 282px;
    }
    th {
      width: 282px;
      height: 52px;
      background: #6eceb2;
      border-radius: 4px 4px 0px 0px;
      text-align: center;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */

      color: #ffffff;
    }

    td,
    th {
      border: 1px solid #6eceb2;
    }
    td {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0px 0px 4px 4px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */

      /* Orange */

      color: #e87722;
    }

    & .row {
      box-sizing: border-box;

      width: 64px;
      height: 65px;

      /* Dark Green */

      background: #0a3b32;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0px 0px 0px 4px;
      text-align: justify;
      padding-left: 32px;
    }
  `;
  const Span = styled.span`
    padding-left: 13px;
  `;
  const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `;

  return (
    <ContainerDiv>
      <Table id="customers">
        <tbody>
          <tr>
            <th id="Tenquy">
              <Span>Tên quỹ</Span>
            </th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            <th>Tăng/Giảm (%)</th>
          </tr>
          <tr>
            <td className="row">Quỹ Tăng trưởng</td>
            <td>200</td>
            <td>100</td>
            <td>30%</td>
          </tr>
          <tr>
            <td className="row">Quỹ Cân bằng</td>
            <td>200</td>
            <td>100</td>
            <td>20%</td>
          </tr>
          <tr>
            <td className="row">Quỹ Bảo toàn</td>
            <td>200</td>
            <td>100</td>
            <td>10%</td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </Table>
    </ContainerDiv>
  );
}

export default Table;
