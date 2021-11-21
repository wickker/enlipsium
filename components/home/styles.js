import styled from 'styled-components';
import { Col, Row, Card } from 'antd';
import { COLORS } from '../../utils/constants';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const StyledRow = styled(Row)`
  && {
    min-height: 94vh;
  }
`;

export const TitleLeftCol = styled(Col)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 120px;
    background-color: ${COLORS.DARK_GRAY};
    height: 75vh;
    margin-top: 45px;
    @media only screen and (max-width: 570px) {
      padding: 0px 50px;
    }
    @media only screen and (max-width: 415px) {
      padding: 0px 30px;
    }
  }
`;

export const Title1 = styled.div`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  font-size: 18px;
  margin-bottom: 50px;
  font-weight: 600;
  color: ${COLORS.LIGHTEST_GRAY};
  @media only screen and (max-width: 415px) {
    font-size: 16px;
  }
`;

export const Title2 = styled(Title1)`
  && {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 0px;
    color: white;
    @media only screen and (max-width: 415px) {
      font-size: 30px;
    }
  }
`;

export const Title3 = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-top: 50px;
  color: ${COLORS.LIGHTEST_GRAY};
  @media only screen and (max-width: 415px) {
    font-size: 16px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
  margin-top: 45px;
  @media only screen and (max-width: 992px) {
    margin-top: 0px;
  }
`;

export const ProductLine = styled.div`
  font-size: 35px;
  color: ${COLORS.SEMI_BLACK};
  padding: 0px 10%;
  vertical-align: middle;
  text-align: center;
  margin-top: 50px;
  @media only screen and (max-width: 576px) {
    padding: 0px 50px;
  }
  @media only screen and (max-width: 350px) {
    padding: 0px 30px;
  }
`;

export const FontAwesomeIcon = styled(Icon)`
  && {
    min-height: 1.2em;
    min-width: 1.2em;
    color: ${COLORS.ORANGE};
    margin-left: 5px;
    vertical-align: middle;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  min-height: 20vh;
`;

export const CardRow = styled(Row)`
  && {
    padding: 0px 10%;
    @media only screen and (max-width: 992px) {
      padding-bottom: 50px;
    }
    @media only screen and (max-width: 576px) {
      padding: 0px 50px 50px 50px;
    }
    @media only screen and (max-width: 350px) {
      padding: 0px 30px 50px 30px;
    }
  }
`;

export const CardCol = styled(Col)`
  && {
    margin: 30px 0px 50px 0px;
    @media only screen and (max-width: 992px) {
      margin: 30px 0px 0px 0px;
    }
  }
`;

export const StyledCard = styled(Card)`
  && {
    width: 100%;
    height: 100%;
    background-color: ${COLORS.DARK_GRAY};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    .ant-card-body {
      padding: 0px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 40px 30px;
`;

export const CardTitle = styled.div`
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 10px;
  color: ${COLORS.ORANGE};
`;

export const CardDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: white;
  line-height: 170%;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 50px;
`;

export const LightContainer = styled.div`
  background-color: ${COLORS.DARK_GRAY};
  width: 100%;
  min-height: 20vh;
  text-align: center;
  padding-bottom: 75px;
`;

export const ContactLine1 = styled.div`
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  text-align: center;
  color: ${COLORS.ORANGE};
  padding: 70px 30px 0px 30px;
  margin-bottom: 5px;
`;

export const ContactLine2 = styled(ContactLine1)`
  && {
    color: white;
    padding: 0px 30px 30px 30px;
  }
`;
