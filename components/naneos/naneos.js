import React from 'react';
import { Row, Col } from 'antd';
import { COLORS, ROUTES_KEYS } from '../../utils/constants';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import {
  TitleLeftCol,
  Title,
  NaneosImg,
  DescriptionTitle,
  EmptyCol,
  XrayImg,
  DescriptionText,
  DescriptionCol,
  FontAwesomeIcon,
  ProductContainer,
  StyledA,
} from './styles';

const Naneos = () => {
  return (
    <Row align='middle' justify='center'>
      <TitleLeftCol xs={24} sm={24} md={24} lg={12}>
        <div>
          <NaneosImg src='naneos-slim.png' alt='Naneos Logo' />
        </div>
        <Title>
          We may not be able to bend light, but we can certainly bend the
          material that produces light. We make scintillators{' '}
          <span style={{ color: `${COLORS.RED}`, fontWeight: '900' }}>
            Bigger, Brighter and Bendable!
          </span>
        </Title>
      </TitleLeftCol>
      <Col xs={24} sm={24} md={24} lg={12}>
        <img
          style={{ width: '100%', height: '75vh', objectFit: 'cover' }}
          src='https://image.shutterstock.com/image-photo/photo-xray-human-shoulder-600w-1716091282.jpg'
          alt='Enlipsium Skeleton'
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <XrayImg src='x-ray.jpg' alt='Enlipsium X-Ray' />
      </Col>
      <DescriptionCol xs={24} sm={24} md={24} lg={12}>
        <DescriptionTitle>Revolutionizing the X-Ray Industry</DescriptionTitle>
        <DescriptionText>
          Enlipsium's thin film scintillator material is changing how X-ray
          devices are build. With a film so thin, flexible and sensitive, we can
          now customize X-ray devices like never before.
        </DescriptionText>
        <br />
        <DescriptionText>
          Given that most of the things we try to image are never really flat -
          have you ever wondered why X-ray detectors are always flat?
        </DescriptionText>
        <br />
        <DescriptionText>
          Can we reduce the X-ray dosage used in medical screening?
        </DescriptionText>
        <br />
        <DescriptionText>
          Many believe that the current X-ray dosage is sufficiently low, but at
          Enlipsium, we say let's go lower.
        </DescriptionText>
        <br />
        <DescriptionText>
          Check out our products below:
          <ProductContainer style={{ marginTop: '5px' }}>
            <FontAwesomeIcon icon={faCheck} />
            <Link href={`${ROUTES_KEYS.UCNPS}`}>
              <StyledA style={{ color: `${COLORS.RED}` }}>
                Upconverting Nanoparticles (UCNPs)
              </StyledA>
            </Link>
          </ProductContainer>
          <ProductContainer>
            <FontAwesomeIcon icon={faCheck} />
            <Link href={`${ROUTES_KEYS.NANO_PEROVSKITE}`}>
              <StyledA style={{ color: `${COLORS.RED}` }}>Nano Perovskite</StyledA>
            </Link>
          </ProductContainer>
          <ProductContainer>
            <FontAwesomeIcon icon={faCheck} />
            <Link href={`${ROUTES_KEYS.ORGANIC}`}>
              <StyledA style={{ color: `${COLORS.RED}` }}>Organic</StyledA>
            </Link>
          </ProductContainer>
        </DescriptionText>
      </DescriptionCol>
      {/* <EmptyCol span={24} /> */}
    </Row>
  );
};

export default Naneos;
