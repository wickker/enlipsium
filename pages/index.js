import { Row, Col } from "antd";
import * as Constants from "../utils/constants";
import content from "../utils/content.json";
import styled from "styled-components";

const LightGrayCol = styled(Col)`
  && {
    background-color: ${Constants.lightGray};
    height: 500px;
    display: flex;
    align-items: center;
  }
`;

const Title = styled(Col)`
  && {
    color: ${Constants.marine};
    font-size: 60px;
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
    @media only screen and (max-width: 600px) {
      font-size: 45px;
    }
  }
`;

const Tagline = styled(Col)`
  && {
    color: ${Constants.gray};
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

const StyledRow = styled(Row)`
  && {
    margin: 30px;
  }
`;

const LeftCol = styled(Col)`
  && {
    padding-right: 30px;
    background-image: url("x-ray-machine.png");
    height: 500px;
    background-size: cover;
    border-radius: 25% 10%;
    background-position: center;
    @media only screen and (max-width: 600px) {
      height: 300px;
    }
  }
`;

const RightCol = styled(Col)`
  && {
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1000px) {
      padding-left: 0px;
      padding-top: 30px;
  }
`;


export default function Home() {
  return (
    <Row>
      <LightGrayCol span={24}>
        <Row>
          <Title span={24}>{content.home.title}</Title>
          <Tagline span={24}>{content.home.tagline1}</Tagline>
          <Tagline span={24}>{content.home.tagline2}</Tagline>
        </Row>
      </LightGrayCol>
      <Col span={24}>
        <StyledRow>
          <LeftCol xs={24} sm={24} md={24} lg={12}>
          </LeftCol>
          <RightCol xs={24} sm={24} md={24} lg={12}>
            Test
          </RightCol>
        </StyledRow>
      </Col>
    </Row>
  );
}
