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
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faTwitterSquare} />
          <FontAwesomeIcon icon={faInstagramSquare} />
        </IconsCol>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
