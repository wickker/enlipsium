import React from 'react';
import { Row } from 'antd';
import { TitleCol } from './styles';

const Home = () => {
  const onButtonClick = () => {
    // window.location.assign('/contact');
  };

  return (
    <Row>
      <TitleCol span={24}>
        {/* <Row>
          <TitleText span={24}>{content.home.title}</TitleText>
          <TitleTagline span={24}>
            <Row>
              <Col span={24} style={{ marginBottom: "5px" }}>{content.home.tagline1}</Col>
              <Col span={24}>
                <strong>{content.home.tagline2}</strong>
              </Col>
            </Row>
          </TitleTagline>
        </Row> */}
      </TitleCol>
      {/* <Col span={24}>
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
              src="yzharperry.jpg"
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
            <AboutStaffName>Professor Qiushui Chen</AboutStaffName>
            <AboutStaffPosition>Technical Advisor</AboutStaffPosition>
          </AboutAvatarCol>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src="chenqiushui.jpg"
              alt="Enlipsium staff - Chen Qiushui"
            />
            <AboutStaffName>Professor Xiaogang Liu</AboutStaffName>
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
      </ContactCol> */}
    </Row>
  );
};

export default Home;