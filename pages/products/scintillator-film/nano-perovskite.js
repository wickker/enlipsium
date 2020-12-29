import { Row, Col } from 'antd';
import * as Constants from '../../../utils/constants';
import styled from 'styled-components';

const TitleColStyled = styled(Col)`
  && {
    padding: 30px;
    height: 50vh;
    background-color: ${Constants.darkGray};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TitleProductCol = styled(Col)`
  && {
    text-align: center;
    color: white;
    font-size: 70px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media (max-width: 400px) {
      font-size: 50px;
    }
  }
`;

const TitleProductDetailCol = styled(Col)`
  && {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 18px;
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }
`;

const InfoColStyled = styled(Col)`
  && {
    padding: 30px;
    @media (max-width: 540px) {
      padding: 30px;
    }
  }
`;

const ImageCol = styled(Col)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const DetailsName = styled(Col)`
  && {
    font-size: 50px;
    line-height: 1.3;
    color: ${Constants.gray};
    margin-bottom: 20px;
    @media (max-width: 400px) {
      font-size: 40px;
    }
  }
`;

const DetailsContact = styled(Col)`
  && {
    font-size: 16px;
    color: ${Constants.semiBlack};
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    margin-bottom: 30px;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export default function Nanoperovskite() {
  return (
    <Row>
      <TitleColStyled span={24}>
        <Row>
          <TitleProductCol span={24}>Products</TitleProductCol>
          <TitleProductDetailCol span={24}>
            Scintillator Film > Nano Perovskite
          </TitleProductDetailCol>
        </Row>
      </TitleColStyled>
      <InfoColStyled span={24}>
        <Row>
          <DetailsName span={24}>Nano Perovskite</DetailsName>
          <DetailsContact span={24}>
            Please{' '}
            <strong>
              <a href='mailto:ttham@enlipsium.com'>contact us</a>
            </strong>{' '}
            for quotation/ more information on our products. We will be glad to
            assist you!
          </DetailsContact>
          <ImageCol xs={24} sm={24} md={24} lg={24}>
            <ImageStyled
              src='../../nano-perovskite-crystal.jpg'
              alt='Nano perovskite'
            />
          </ImageCol>
        </Row>
      </InfoColStyled>
    </Row>
  );
}
