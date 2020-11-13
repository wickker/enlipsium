import { Row, Col } from "antd";
import * as Constants from "../utils/constants";
import content from "../utils/content.json";
import styled from "styled-components";
import Button from "../components/Button";

const LightGrayCol = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    height: 500px;
    display: flex;
    align-items: center;
    padding: 30px;
  }
`;

const LightGrayCol2 = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled(Col)`
  && {
    color: ${Constants.marine};
    font-size: 60px;
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
      font-size: 45px;
    }
    @media only screen and (max-width: 340px) {
      font-size: 42px;
    }
  }
`;

const Tagline = styled(Col)`
  && {
    color: ${Constants.gray};
    font-size: 20px;
    text-align: center;
    margin-bottom: 5px;
    @media only screen and (max-width: 575px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 340px) {
      font-size: 14px;
    }
  }
`;

const StyledRow = styled(Row)`
  && {
    margin: 30px;
  }
`;

const StyledRow2 = styled(Row)`
  && {
  }
`;

const LeftCol = styled(Col)`
  && {
    padding-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 991px) {
      padding-right: 0px;
    }
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 25% 10%;
`;

const RightCol = styled(Col)`
  && {
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 991px) {
      padding-left: 0px;
      padding-top: 30px;
      text-align: center;
  }
`;

const Title2 = styled(Col)`
  && {
    color: ${Constants.gray};
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 30px;
    @media only screen and (max-width: 340px) {
      font-size: 38px;
    }
  }
`;

const Description = styled(Col)`
  && {
    color: ${Constants.darkGray};
    white-space: pre-line;
    line-height: 1.6;
    @media only screen and (max-width: 340px) {
      font-size: 14px;
      padding: 0 10px;
    }
  }
`;

const Tagline3 = styled(Col)`
  && {
    font-size: 40px;
    color: ${Constants.gray};
    text-align: center;
  }
`;

const Tagline4 = styled(Col)`
  && {
    font-size: 40px;
    color: ${Constants.lightGray};
    text-transform: uppercase;
    font-style: italic;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const StyledCol = styled(Col)`
  && {
    text-align: center;
  }
`;

export default function Home() {

  const onButtonClick = () => {
    window.location.assign("/contact")
  }

  return (
    <Row>
      <LightGrayCol span={24}>
        <Row>
          <Title span={24}>{content.home.title}</Title>
          <Tagline span={24}>{content.home.tagline1}</Tagline>
          <Tagline span={24}><strong>{content.home.tagline2}</strong></Tagline>
        </Row>
      </LightGrayCol>
      <Col span={24}>
        <StyledRow>
          <LeftCol xs={24} sm={24} md={24} lg={12}>
            <StyledImage src="x-ray-machine.png" alt="x-ray machine" />
          </LeftCol>
          <RightCol xs={24} sm={24} md={24} lg={12}>
            <Row>
              <Title2 span={24}>{content.home.title2}</Title2>
              <Description span={24}>{content.home.description}</Description>
            </Row>
          </RightCol>
        </StyledRow>
      </Col>
      <LightGrayCol2 span={24}>
        <StyledRow2>
          <Tagline3 span={24}>{content.home.tagline3}</Tagline3>
          <Tagline4 span={24}>{content.home.tagline4}</Tagline4>
          <StyledCol span={24}>
            <Button buttonText="Contact Us" onClick={onButtonClick}/>
          </StyledCol>
        </StyledRow2>
      </LightGrayCol2>
    </Row>
  );
}
