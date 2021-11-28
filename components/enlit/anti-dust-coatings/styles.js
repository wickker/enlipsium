import { Col, Row } from 'antd';
import { COLORS } from '../../../utils/constants';
import styled from 'styled-components';

export const TitleCol = styled(Col)`
  && {
    padding: 30px;
    height: 50vh;
    background-color: ${COLORS.DARK_BLUE};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-size: 70px;
  margin-bottom: 20px;
  width: 100%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  @media only screen and (max-width: 400px) {
    font-size: 55px;
  }
`;

export const Tagline = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 18px;
  color: white;
`;

export const StyledRow = styled(Row)`
  && {
    background-color: ${COLORS.LIGHTEST_GRAY};
    padding: 50px 10% 20px 10%;
  }
`;

export const LeftCol = styled(Col)`
  && {
    padding-right: 30px;
    margin-bottom: 30px;
    @media only screen and (max-width: 768px) {
      padding-right: 0px;
    }
  }
`;

export const RightCol = styled(Col)`
  && {
    padding-left: 30px;
    margin-bottom: 30px;
    @media only screen and (max-width: 768px) {
      padding-left: 0px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ProductTitle = styled.div`
  font-size: 50px;
  color: ${COLORS.DARK_BLUE};
  line-height: 0.8;
  margin-bottom: 20px;
  @media only screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

export const ProductItem = styled.div`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 200%;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;
