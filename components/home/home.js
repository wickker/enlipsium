import React from 'react';
import { Row, Col, Card } from 'antd';
import { COLORS } from '../../utils/constants';
import {
  TitleLeftCol,
  Title1,
  Title2,
  Title3,
  ProductLine,
  CardCol,
  CardTitle,
  CardDescription,
  CardRow,
  TeamTitle,
  TeamTagline,
  TeamRow,
  TeamName,
  TeamPosition,
  ContactLine1,
  ContactLine2,
  EmptyCol,
} from './styles';

const { Meta } = Card;

const Home = () => {
  const onButtonClick = () => {
    // window.location.assign('/contact');
  };

  return (
    <Row align='middle' justify='center'>
      <TitleLeftCol xs={24} sm={24} md={24} lg={12}>
        <Title1>ENABLING SCIENCE TO LIFE</Title1>
        <Title2 style={{ color: `${COLORS.ORANGE}` }}>TECHNOLOGY</Title2>
        <Title2>IN LIGHT PARTICLES</Title2>
        <Title3>
          We may not be able to bend light, but we certainly can bend the
          material that produces light.
        </Title3>
      </TitleLeftCol>
      <Col xs={24} sm={24} md={24} lg={12}>
        <div>
          <img
            style={{ width: '100%', height: '75vh' }}
            src='https://image.shutterstock.com/shutterstock/photos/1646466424/display_1500/stock-photo-cells-and-biological-chain-molecules-and-abstract-conception-d-rendering-computer-digital-drawing-1646466424.jpg'
            alt='Enlipsium Homepage'
          />
        </div>
      </Col>
      <ProductLine>
        Enlipsium offers{' '}
        <span style={{ color: `${COLORS.ORANGE}`, fontWeight: '900' }}>
          3 technologies
        </span>{' '}
        for different industries and applications
      </ProductLine>
      <CardRow justify='space-between'>
        <CardCol xs={24} sm={24} md={24} lg={8}>
          <Card
            style={{ width: '100%' }}
            bordered={false}
            cover={
              <img src='polyipnos-logo.png' style={{ borderRadius: '15px' }} />
            }
          >
            <CardTitle>Polyipnos</CardTitle>
            <CardDescription>
              Lanthanide luminescence nanocrystals are commonly used in
              anti-counterfeit applications. By adding a small amount of the
              nanocrystal into a medium (e.g. inks or polymers), a customizable
              and unique color signature may be produced. It is invisble in the
              visible light spectrum but under UV or IR, its unique color may be
              detected by the naked eye or equipment.
            </CardDescription>
          </Card>
        </CardCol>
        <CardCol xs={24} sm={24} md={24} lg={8}>
          <Card
            style={{ width: '100%' }}
            bordered={false}
            cover={
              <img src='naneos-logo.png' style={{ borderRadius: '15px' }} />
            }
          >
            <CardTitle>Naneos (X-ray Scintillators)</CardTitle>
            <CardDescription>
              Enlipsium’s thin film scintillator material is changing how X-ray
              devices are build. With a film so thin, flexible and sensitive, we
              can now customize X-ray devices like never before. Many believe
              that the current X-ray dosage is sufficiently low, but at
              Enlipsium, we say let’s go lower.
            </CardDescription>
          </Card>
        </CardCol>
        <CardCol xs={24} sm={24} md={24} lg={8}>
          <Card
            style={{ width: '100%' }}
            bordered={false}
            cover={
              <img src='enlit-logo.png' style={{ borderRadius: '15px' }} />
            }
          >
            <CardTitle>Enlit</CardTitle>
            <CardDescription>
              Enlit EcoClean technology provides an advanced self-cleaning
              coating solution that works as a protective shield against dust,
              dirt and water marks. We develop sustainable and ecofriendly
              products with the environment in mind.
            </CardDescription>
          </Card>
        </CardCol>
      </CardRow>
      <TeamTitle>Who Are These People Anyway?</TeamTitle>
      <TeamTagline>Teamwork Makes the Dream Work</TeamTagline>
      <TeamRow justify='center'>
        <Col xs={24} sm={24} md={12} lg={6}>
          <img
            src='yzharperry.jpg'
            alt='Enlipsium Yzhar Perry'
            style={{ width: '100%', borderRadius: '50%', padding: '20px' }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <img
            src='tommytham.jpg'
            alt='Enlipsium Tommy Tham'
            style={{ width: '100%', borderRadius: '50%', padding: '20px' }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <img
            src='chenqiushui.jpg'
            alt='Enlipsium Chen Qiu Shui'
            style={{ width: '100%', borderRadius: '50%', padding: '20px' }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <img
            src='xiaogangliu.jpg'
            alt='Enlipsium Liu Xiao Gang'
            style={{ width: '100%', borderRadius: '50%', padding: '20px' }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <TeamName>Mr Yzhar Perry</TeamName>
          <TeamPosition>CEO & Founder</TeamPosition>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <TeamName>Mr Tommy Tham</TeamName>
          <TeamPosition>CTO & Founder</TeamPosition>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <TeamName>Professor Qiushui Chen</TeamName>
          <TeamPosition>Technical Advisor</TeamPosition>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <TeamName>Professor Xiaogang Liu</TeamName>
          <TeamPosition>Technical Advisor</TeamPosition>
        </Col>
      </TeamRow>
      <ContactLine1>Let There Be</ContactLine1>
      <ContactLine2>LIGHT</ContactLine2>
      <EmptyCol span={24} />

      {/* <AboutCol span={24}>
        <Row>
          <AboutTitle xs={24} sm={24} md={24} lg={24}>
            Who Are These People Anyway?
          </AboutTitle>
          <AboutTagline xs={24} sm={24} md={24} lg={24}>
            Teamwork Makes the Dream Work
          </AboutTagline>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src='yzharperry.jpg'
              alt='Enlipsium staff - Yzhar Perry'
            />
            <AboutStaffName>Mr Yzhar Perry</AboutStaffName>
            <AboutStaffPosition>CEO & Founder</AboutStaffPosition>
          </AboutAvatarCol>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src='tommytham.jpg'
              alt='Enlipsium staff - Tommy Tham'
            />
            <AboutStaffName>Mr Tommy Tham</AboutStaffName>
            <AboutStaffPosition>CTO & Founder</AboutStaffPosition>
          </AboutAvatarCol>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src='liuxiaogang.jpg'
              alt='Enlipsium staff - Liu Xiaogang'
            />
            <AboutStaffName>Professor Qiushui Chen</AboutStaffName>
            <AboutStaffPosition>Technical Advisor</AboutStaffPosition>
          </AboutAvatarCol>
          <AboutAvatarCol xs={24} sm={24} md={12} lg={6}>
            <AboutAvatar
              src='chenqiushui.jpg'
              alt='Enlipsium staff - Chen Qiushui'
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
            <Button buttonText='Contact Us' onClick={onButtonClick} />
          </ContactButtonCol>
        </Row>
      </ContactCol> */}
    </Row>
  );
};

export default Home;
