import styled from 'styled-components';
import { Col, Row } from 'antd';
import { COLORS } from '../../utils/constants';

export const TitleLeftCol = styled(Col)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 120px;
    background-color: ${COLORS.DARK_GRAY};
    height: 75vh;
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

export const ProductLine = styled.div`
  font-size: 30px;
  color: ${COLORS.DARK_GRAY};
  padding: 0px 120px;
  text-align: center;
  margin-top: 50px;
  @media only screen and (max-width: 570px) {
    padding: 0px 50px;
  }
  @media only screen and (max-width: 350px) {
    padding: 0px 30px;
  }
`;

export const CardRow = styled(Row)`
  && {
    padding: 0px 100px;
    @media only screen and (max-width: 570px) {
      padding: 0px 50px;
    }
    @media only screen and (max-width: 350px) {
      padding: 0px 30px;
    }
  }
`;

export const CardCol = styled(Col)`
  && {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
  text-align: center;
  color: ${COLORS.SEMI_BLACK};
`;

export const CardDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: ${COLORS.DARK_GRAY};
  text-align: center;
`;

export const TeamTitle = styled.div`
  font-size: 50px;
  width: 100%;
  background-color: ${COLORS.DARK_GRAY};
  text-align: center;
  color: ${COLORS.ORANGE};
  padding: 50px 30px 10px 30px;
  @media only screen and (max-width: 570px) {
    font-size: 40px;
  }
`;

export const TeamPhoto = styled.img`
  width: 100%;
  border-radius: 20%;
  padding: 20px 30px;
`;

export const TeamTagline = styled.div`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  background-color: ${COLORS.DARK_GRAY};
  text-align: center;
  color: ${COLORS.LIGHTEST_GRAY};
  padding: 0px 30px 20px 30px;
  letter-spacing: 1px;
`;

export const TeamRow = styled(Row)`
  && {
    padding: 0px 100px 50px 100px;
    background-color: ${COLORS.DARK_GRAY};
    @media only screen and (max-width: 576px) {
      padding: 0px 10px 50px 10px;
    }
  }
`;

export const TeamName = styled.div`
  font-size: 17px;
  color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const TeamPosition = styled.div`
  font-size: 17px;
  color: ${COLORS.LIGHTEST_GRAY};
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const ContactLine1 = styled.div`
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  text-align: center;
  color: ${COLORS.DARK_GRAY};
  padding: 50px 30px 0px 30px;
  margin-bottom: 5px;
`;

export const ContactLine2 = styled(ContactLine1)`
  && {
    color: ${COLORS.LIGHT_GRAY};
    padding: 0px 30px;
  }
`;

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;
