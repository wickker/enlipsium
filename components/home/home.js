import React from 'react';
import { Col } from 'antd';
import { COLORS, ROUTES_KEYS } from '../../utils/constants';
import { get } from 'lodash';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../reusable/button';
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
  ContactLine1,
  ContactLine2,
  StyledRow,
  ProductContainer,
  StyledCard,
  FontAwesomeIcon,
  TextContainer,
  ButtonDiv,
  LightContainer,
  Image,
} from './styles';

const Home = () => {
  const handleClickRouteButton = (routeKey) => {
    window.location.assign(get(ROUTES_KEYS, routeKey));
  };

  return (
    <StyledRow align='start' justify='center'>
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
        <Image src='homepage.webp' alt='Enlipsium Homepage' />
      </Col>
      <ProductContainer>
        <ProductLine>
          Enlipsium offers{' '}
          <span style={{ color: `${COLORS.ORANGE}`, fontWeight: '900' }}>
            3 technologies
          </span>{' '}
          for different industries and applications
          {/* <span>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </span> */}
        </ProductLine>
        <CardRow justify='space-between' gutter={[36, 0]}>
          <CardCol
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 24, order: 2 }}
            lg={{ span: 8, order: 1 }}
          >
            <StyledCard
              bordered={false}
              name='polyipnos'
              cover={<img src='polyipnos-logo.webp' />}
            >
              <TextContainer>
                <CardTitle>Polyipnos</CardTitle>
                <CardDescription>
                  Lanthanide luminescence nanocrystals are commonly used in
                  anti-counterfeit applications. By adding a small amount of the
                  nanocrystal into a medium (e.g. inks or polymers), a
                  customizable and unique color signature may be produced. It is
                  invisble in the visible light spectrum but under UV or IR, its
                  unique color may be detected by the naked eye or equipment.
                </CardDescription>
                <ButtonDiv>
                  <Button
                    onClick={() => handleClickRouteButton('POLYIPNOS')}
                    inputColor='orange'
                    buttonText='Learn More'
                  />
                </ButtonDiv>
              </TextContainer>
            </StyledCard>
          </CardCol>
          <CardCol
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 24, order: 1 }}
            lg={{ span: 8, order: 2 }}
          >
            <StyledCard
              bordered={false}
              name='naneos'
              cover={<img src='naneos-logo.webp' />}
            >
              <TextContainer>
                <CardTitle>Naneos (X-ray Scintillators)</CardTitle>
                <CardDescription>
                  Enlipsium’s thin film scintillator material is changing how
                  X-ray devices are build. With a film so thin, flexible and
                  sensitive, we can now customize X-ray devices like never
                  before. Many believe that the current X-ray dosage is
                  sufficiently low, but at Enlipsium, we say let’s go lower.
                </CardDescription>
                <ButtonDiv>
                  <Button
                    onClick={() => handleClickRouteButton('NANEOS')}
                    inputColor='orange'
                    buttonText='Learn More'
                  />
                </ButtonDiv>
              </TextContainer>
            </StyledCard>
          </CardCol>
          <CardCol
            xs={{ span: 24, order: 3 }}
            sm={{ span: 24, order: 3 }}
            md={{ span: 24, order: 3 }}
            lg={{ span: 8, order: 3 }}
          >
            <StyledCard
              bordered={false}
              name='enlit'
              cover={<img src='enlit-logo.webp' />}
            >
              <TextContainer>
                <CardTitle>Enlit</CardTitle>
                <CardDescription>
                  Enlit EcoClean technology provides an advanced self-cleaning
                  coating solution that works as a protective shield against
                  dust, dirt and water marks. We develop sustainable and
                  ecofriendly products with the environment in mind.
                </CardDescription>
                <ButtonDiv>
                  <Button
                    onClick={() => handleClickRouteButton('ENLIT')}
                    inputColor='orange'
                    buttonText='Learn More'
                  />
                </ButtonDiv>
              </TextContainer>
            </StyledCard>
          </CardCol>
        </CardRow>
      </ProductContainer>
      <LightContainer>
        <ContactLine1>Let There Be</ContactLine1>
        <ContactLine2>LIGHT</ContactLine2>
        <Button
          onClick={() => handleClickRouteButton('CONTACT_US')}
          inputColor='orange'
          buttonText='Contact Us'
        />
      </LightContainer>
    </StyledRow>
  );
};

export default Home;
