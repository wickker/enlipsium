import styled from "styled-components";
import { Row, Col } from "antd";

const StyledCol = styled(Col)`
  && {
    height: 87vh;
  }
`;

export default function Contact() {
  return (
    <Row>
      <StyledCol span={24}>
        <iframe
          height="70%"
          width="80%"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgUGJ4SIy0JdAG6vMMQMZfVBxJMEDR-RA
    &q=NUS+Incubator"
        ></iframe>
      </StyledCol>
    </Row>
  );
}
