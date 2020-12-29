import { Row, Col } from "antd";
import * as Constants from "../utils/constants";
import content from "../utils/content.json";
import styled from "styled-components";
import Button from "../components/Button";

// --------------------------------
// --------------------------------
// -------------TITLE--------------
// --------------------------------
// --------------------------------

const TitleCol = styled(Col)`
  && {
    background-color: ${Constants.lightestGray};
    height: 70vh;
    display: flex;
    align-items: center;
    padding: 0 30px;
  }
`;

const TitleText = styled(Col)`
  && {
    color: ${Constants.marine};
    font-size: 85px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 10px;
    @media only screen and (max-width: 991px) {
      font-size: 75px;
    }
    @media only screen and (max-width: 575px) {
      font-size: 55px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 50px;
    }
  }
`;

const TitleTagline = styled(Col)`
  && {
    color: ${Constants.gray};
    font-size: 20px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    @media only screen and (max-width: 991px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 575px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

// --------------------------------
// --------------------------------
// ----------DESCRIPTION-----------
// --------------------------------
// --------------------------------

const DescriptionRow = styled(Row)`
  && {
    margin: 60px 30px;
  }
`;

const DescriptionImageCol = styled(Col)`
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

const DescriptionImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 25% 10%;
`;

const DescriptionTextCol = styled(Col)`
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

const DescriptionTextTitle = styled(Col)`
  && {
    color: ${Constants.gray};
    font-size: 50px;
    line-height: 1.3;
    margin-bottom: 30px;
    @media only screen and (max-width: 340px) {
      font-size: 40px;
    }
  }
`;

const DescriptionText = styled(Col)`
  && {
    color: ${Constants.darkGray};
    white-space: pre-line;
    line-height: 1.6;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    @media only screen and (max-width: 340px) {
      font-size: 14px;
      padding: 0 10px;
    }
  }
`;

// --------------------------------
// --------------------------------
// -------------ABOUT--------------
// --------------------------------
// --------------------------------

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
    font-size: 50px;
    color: ${Constants.marine};
    text-align: center;
    margin-bottom: 5px;
  }
`;

const AboutTagline = styled(Col)`
  && {
    color: ${Constants.lightGray};
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const AboutAvatarCol = styled(Col)`
  && {
    padding: 0 20px 30px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const AboutAvatar = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const AboutStaffName = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: ${Constants.darkGray};
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

const AboutStaffPosition = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: ${Constants.gray};
  font-size: 16px;
  font-style: italic;
`;

// --------------------------------
// --------------------------------
// -------------CONTACT------------
// --------------------------------
// --------------------------------

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
    font-family: "Montserrat", sans-serif;
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
    font-family: "Montserrat", sans-serif;
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
          <TitleText span={24}>{content.home.title}</TitleText>
          <TitleTagline span={24}>
            <Row>
              <Col span={24} style={{ marginBottom: "5px" }}>{content.home.tagline1}</Col>
              <Col span={24}>
                <strong>{content.home.tagline2}</strong>
              </Col>
            </Row>
          </TitleTagline>
        </Row>
      </TitleCol>
      <Col span={24}>
        <DescriptionRow>
          <DescriptionImageCol xs={24} sm={24} md={24} lg={12}>
            <DescriptionImage src="x-ray-latest.jpg" alt="x-ray machine" />
          </DescriptionImageCol>
          <DescriptionTextCol xs={24} sm={24} md={24} lg={12}>
            <Row>
              <DescriptionTextTitle span={24}>
                {content.home.title2}
              </DescriptionTextTitle>
              <DescriptionText span={24}>
                {content.home.description}
              </DescriptionText>
            </Row>
          </DescriptionTextCol>
        </DescriptionRow>
      </Col>
      <AboutCol span={24}>
        <Row>
          <AboutTitle xs={24} sm={24} md={24} lg={24}>
            Who Are These People Anyway?
          </AboutTitle>
          <AboutTagline xs={24} sm={24} md={24} lg={24}>
            Teamwork Makes the Dream Work
          </AboutTagline>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src="perry.jpg"
              alt="Enlipsium staff - Yzhar Perry"
            />
            <AboutStaffName>Mr Yzhar Perry</AboutStaffName>
            <AboutStaffPosition>CEO & Founder</AboutStaffPosition>
          </AboutAvatarCol>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src="tommytham.jpg"
              alt="Enlipsium staff - Tommy Tham"
            />
            <AboutStaffName>Mr Tommy Tham</AboutStaffName>
            <AboutStaffPosition>CTO & Founder</AboutStaffPosition>
          </AboutAvatarCol>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src="liuxiaogang.jpg"
              alt="Enlipsium staff - Liu Xiaogang"
            />
            <AboutStaffName>Professor Xiaogang Liu</AboutStaffName>
            <AboutStaffPosition>Technical Advisor</AboutStaffPosition>
          </AboutAvatarCol>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src="chenqiushui.jpg"
              alt="Enlipsium staff - Chen Qiushui"
            />
            <AboutStaffName>Professor Qiushui Chen</AboutStaffName>
            <AboutStaffPosition>Technical Advisor</AboutStaffPosition>
          </AboutAvatarCol>
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
