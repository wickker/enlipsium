import React from 'react';
import { Row, Col } from 'antd';
import { COLORS, ROUTES_KEYS } from '../../utils/constants';
import { get } from 'lodash';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  TeamTitle,
  TeamTagline,
  TeamRow,
  StyledRow,
  TitleCol,
  WriteUpCol,
  MainContainer,
  Text,
  List,
  FontAwesomeIcon,
  ImageCol,
  Info,
} from './styles';

const About = () => {
  return (
    <StyledRow>
      <TeamTitle>Who are these people anyway?</TeamTitle>
      <TeamTagline>Teamwork Makes The Dream Work</TeamTagline>
      <Col span={24}>
        <TeamRow gutter={{ xs: 0, sm: 36, md: 36, lg: 36 }}>
          <Col xs={24} sm={24} md={12} lg={6}>
            <ImageCol span={24} path='yzhar'>
              <Info className='info'>
                <div style={{ marginBottom: '3px' }}>Mr Yzhar Perry</div>
                <div>CEO & Founder</div>
              </Info>
            </ImageCol>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <ImageCol span={24} path='tommy'>
              <Info className='info'>
                <div style={{ marginBottom: '3px' }}>Mr Tommy Tham</div>
                <div>CTO & Founder</div>
              </Info>
            </ImageCol>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <ImageCol span={24} path='qiu'>
              <Info className='info'>
                <div style={{ marginBottom: '3px' }}>
                  Professor Qiushui Chen
                </div>
                <div>Technical Advisor</div>
              </Info>
            </ImageCol>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <ImageCol span={24} path='xiao'>
              <Info className='info'>
                <div style={{ marginBottom: '3px' }}>
                  Professor Xiaogang Liu
                </div>
                <div>Technical Advisor</div>
              </Info>
            </ImageCol>
          </Col>
        </TeamRow>
      </Col>
      <MainContainer>
        <TitleCol xs={24} sm={4} md={4} lg={4}>
          <span>About</span>
        </TitleCol>
        <WriteUpCol xs={24} sm={20} md={20} lg={20}>
          <Text>
            Enlipsium is a National University of Singapore (NUS) Graduate
            Research Innovation Programme (GRIP) company i.e. a spin off company
            driven by NUS-developed technology. Founded in 2020 as an advanced
            material startup, Enlipsium currently holds 3 patents in the area of
            perovskite and luminescent materials.
          </Text>
          <br />
          <Text>
            Being one of the first companies in the world to have successfully
            taken X-ray images with nano-perovskite scintillators, Enlipsium is
            continuing to build on:
          </Text>
          <br />
          <List>
            <FontAwesomeIcon icon={faCheck} />
            Naneos materials to develop X-ray imaging devices of the future
          </List>
          <br />
          <List>
            <FontAwesomeIcon icon={faCheck} />
            Polyipnos luminescent materials to ensure supply chain
            accountability and that our customers' products are always well
            protected against counterfeiting
          </List>
          <br />
          <List>
            <FontAwesomeIcon icon={faCheck} />
            Enlit range of products provides sustainable and innovative
            solutions, improving efficiency in manpower reliant industries such
            as Building and Construction.
          </List>
          <br />
          <Text>
            Enlipsium has a fully functional chemical wet lab and material scale
            up capabilities in Singapore, along with a strong business network
            in the South East Asian (SEA) region.
          </Text>
        </WriteUpCol>
      </MainContainer>
    </StyledRow>
  );
};

export default About;
