import React from 'react';
import { Row } from 'antd';
import {
  DummyCol,
  CopyrightTextCol,
  IconsCol,
  StyledFooter,
  FontAwesomeIcon,
} from './styles';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <StyledFooter>
      <Row style={{ height: '100%' }}>
        <CopyrightTextCol xs={11} sm={11} md={8} lg={8}>
          {`© ${year} Enlipsium All Rights Reserved`}
        </CopyrightTextCol>
        <DummyCol xs={2} sm={2} md={8} lg={8}></DummyCol>
        <IconsCol xs={11} sm={11} md={8} lg={8}>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a
            href='https://www.linkedin.com/company/31339881/admin/'
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </IconsCol>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
