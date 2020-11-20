import { Row, Col } from "antd";
import * as Constants from "../utils/constants";
import content from "../utils/content.json";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button";

const TitleCol = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    height: 70vh;
    display: flex;
    align-items: center;
    padding: 30px;
  }
`;

const Title = styled(Col)`
  && {
    color: ${Constants.marine};
    font-size: 75px;
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: 500;
    @media only screen and (max-width: 991px) {
      font-size: 65px;
    }
    @media only screen and (max-width: 575px) {
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
    @media only screen and (max-width: 575px) {
      font-size: 16px;
    }
  }
`;

const StyledWriteUpRow = styled(Row)`
  && {
    margin: 60px 30px;
  }
`;

const LeftImageCol = styled(Col)`
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

const RightWriteUpCol = styled(Col)`
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

const WriteUpTitle = styled(Col)`
  && {
    color: ${Constants.gray};
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 30px;
    @media only screen and (max-width: 340px) {
      font-size: 40px;
    }
  }
`;

const WriteUp = styled(Col)`
  && {
    color: ${Constants.darkGray};
    white-space: pre-line;
    line-height: 1.6;
    @media only screen and (max-width: 340px) {
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const AboutCol = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    display: flex;
    align-items: center;
    padding: 60px 30px 30px 30px;
    justify-content: center;
  }
`;

const AboutTitle = styled(Col)`
  && {
    font-size: 40px;
    color: ${Constants.marine};
    text-align: center;
    margin-bottom: 5px;
  }
`;

const AboutTagline = styled(Col)`
  && {
    color: ${Constants.lightGray};
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const AvatarCol = styled(Col)`
  && {
    padding: 0 20px 30px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledAvatar = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const StaffName = styled.div`
  text-align: center;
  color: ${Constants.darkGray};
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

const StaffPosition = styled.div`
  text-align: center;
  color: ${Constants.gray};
  font-size: 16px;
  font-style: italic;
`;

const ContactCol = styled(Col)`
  && {
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ContactTitle1 = styled(Col)`
  && {
    font-size: 40px;
    color: ${Constants.gray};
    text-align: center;
  }
`;

const ContactTitle2 = styled(Col)`
  && {
    font-size: 40px;
    color: ${Constants.lightGray};
    text-transform: uppercase;
    font-style: italic;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const ContactButtonCol = styled(Col)`
  && {
    text-align: center;
  }
`;

export default function Home() {
  const onButtonClick = () => {
    window.location.assign("/contact");
  };

  return (
    <Row>
      <TitleCol span={24}>
        <Row>
          <Title span={24}>{content.home.title}</Title>
          <Tagline span={24}>{content.home.tagline1}</Tagline>
          <Tagline span={24}>
            <strong>{content.home.tagline2}</strong>
          </Tagline>
        </Row>
      </TitleCol>
      <Col span={24}>
        <StyledWriteUpRow>
          <LeftImageCol xs={24} sm={24} md={24} lg={12}>
            <StyledImage src="x-ray-machine.png" alt="x-ray machine" />
          </LeftImageCol>
          <RightWriteUpCol xs={24} sm={24} md={24} lg={12}>
            <Row>
              <WriteUpTitle span={24}>{content.home.title2}</WriteUpTitle>
              <WriteUp span={24}>{content.home.description}</WriteUp>
            </Row>
          </RightWriteUpCol>
        </StyledWriteUpRow>
      </Col>
      <AboutCol span={24}>
        <Row>
          <AboutTitle xs={24} sm={24} md={24} lg={24}>
            Who Are These People Anyway?
          </AboutTitle>
          <AboutTagline xs={24} sm={24} md={24} lg={24}>
            Teamwork makes the dream work
          </AboutTagline>
          <AvatarCol xs={24} sm={24} md={12} lg={6}>
            <StyledAvatar
              src="https://via.placeholder.com/300"
              alt="Enlipsium staff"
            />
            <StaffName>Tommy Tham</StaffName>
            <StaffPosition>Founder & CEO</StaffPosition>
          </AvatarCol>
          <AvatarCol xs={24} sm={24} md={12} lg={6}>
            <StyledAvatar
              src="https://via.placeholder.com/300"
              alt="Enlipsium staff"
            />
            <StaffName>Full Name</StaffName>
            <StaffPosition>Position</StaffPosition>
          </AvatarCol>
          <AvatarCol xs={24} sm={24} md={12} lg={6}>
            <StyledAvatar
              src="https://via.placeholder.com/300"
              alt="Enlipsium staff"
            />
            <StaffName>Full Name</StaffName>
            <StaffPosition>Position</StaffPosition>
          </AvatarCol>
          <AvatarCol xs={24} sm={24} md={12} lg={6}>
            <StyledAvatar
              src="https://via.placeholder.com/300"
              alt="Enlipsium staff"
            />
            <StaffName>Full Name</StaffName>
            <StaffPosition>Position</StaffPosition>
          </AvatarCol>
        </Row>
      </AboutCol>
      <ContactCol span={24}>
        <Row>
          <ContactTitle1 span={24}>{content.home.tagline3}</ContactTitle1>
          <ContactTitle2 span={24}>{content.home.tagline4}</ContactTitle2>
          <ContactButtonCol span={24}>
            <Button buttonText="Contact Us" onClick={onButtonClick} />
          </ContactButtonCol>
        </Row>
      </ContactCol>
    </Row>
  );
}
