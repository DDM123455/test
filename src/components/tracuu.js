import styled from "styled-components";
const H3 = styled.h3`
  @font-face {
    font-family: "FWD Circular Viet TT";
    src: url("../../public/fonts/FWDCircularVietTT-Bold");
  }
  font-family: "FWD Circular Viet TT";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 50px;
  margin-top: 105px;
  margin-bottom: 20px;

  color: #e87722;
`;
const Section = styled.section`
  font-family: "FWD Circular Viet TT";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 40px;
  color: #0a3b32;
`;
const Div = styled.div`
  width: 892px;
  height: auto;
  display: flex;
  margin: auto;
`;

function TraCuu() {
  return (
    <div>
      <H3>Tra cứu đơn vị quỹ</H3>
      <Div>
        <Section>
          Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện
          tại và quá khứ, bạn có thể tuỳ chọn thời điểm kiểm tra cứu giá trị quỹ
          để nắm bắt đầy đủ nhất sự thay đổi của giá đơn vị quỹ theo khung thời
          gian bạn muốn
        </Section>
      </Div>
    </div>
  );
}

export default TraCuu;
