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
      padding: 30px 30px 30px; 30px;
    }
  }
`;

const ImageCol = styled(Col)`
  && {
    padding-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
      padding-right: 0;
      margin-bottom: 30px;
    }
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10%;
`;

const DetailsCol = styled(Col)`
  && {
    padding-left: 30px;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      padding-left: 0;
    }
  }
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

const DetailsApplications = styled(Col)`
  && {
    font-size: 17px;
    color: ${Constants.semiBlack};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }
`;

const Details = styled(Col)`
  && {
    font-size: 16px;
    color: ${Constants.semiBlack};
    font-family: 'Montserrat', sans-serif;
    white-space: pre-line;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

const DetailsContact = styled(Col)`
  && {
    font-size: 16px;
    color: ${Constants.semiBlack};
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    margin-top: 30px;
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
          <ImageCol xs={24} sm={24} md={12} lg={12}>
            <ImageStyled
              src='http://via.placeholder.com/700x500'
              alt='Nano perovskite'
            />
          </ImageCol>
          <DetailsCol xs={24} sm={24} md={12} lg={12}>
            <Row>
              <DetailsName span={24}>
                Nano Perovskite
              </DetailsName>
              {/* <DetailsApplications span={24}>Applications:</DetailsApplications> */}
              <Details span={24}>
                {/* <ul>
                  <li>Biosensors</li>
                  <li>Flow cytometry</li>
                  <li>Highly sensitive bio-imaging</li>
                  <li>Immunoassay</li>
                  <li>Light-responsive drug release</li>
                  <li>Molecular recognition</li>
                  <li>Photosensitizers in photodynamic therapy</li>
                </ul> */}
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              </Details>
              <DetailsContact span={24}>
                Please <a href='mailto:ttham@enlipsium.com'>contact us</a> for
                quotation/ more information on our products. We will be glad to
                assist you!
              </DetailsContact>
            </Row>
          </DetailsCol>
        </Row>
      </InfoColStyled>
    </Row>
  );
}
