import styled from "styled-components";
import { Row, Col } from "antd";
import * as Constants from "../utils/constants";

const LightGrayCol = styled(Col)`
  && {
    background-color: ${Constants.lightGray};
    height: 500px;
    display: flex;
    align-items: center;
  }
`;

const GrayCol = styled(Col)`
  && {
    background-color: ${Constants.gray};
    height: 500px;
    display: flex;
    align-items: center;
  }
`;

const Title = styled(Col)`
  && {
    color: ${Constants.marine};
    font-size: 65px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const Tagline = styled(Col)`
  && {
    color: ${Constants.gray};
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export default function Home() {
  return (
    <Row>
      <LightGrayCol span={24}>
        <Row>
          <Title span={24}>{Constants.mainPageTitle}</Title>
          <Tagline span={24}>{Constants.tagline1}</Tagline>
          <Tagline span={24}>{Constants.tagline2}</Tagline>
        </Row>
      </LightGrayCol>
      <GrayCol span={24}></GrayCol>
    </Row>
  );
}
