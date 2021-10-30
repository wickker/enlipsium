import { Col } from 'antd';
import { COLORS } from '../../../utils/constants';
import styled from 'styled-components';

export const TitleCol = styled(Col)`
  && {
    padding: 30px;
    height: 50vh;
    background-color: black;
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
  color: ${COLORS.RED};
  text-transform: uppercase;
  text-align: center;
`;

export const Tagline = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 18px;
`;

export const DetailsName = styled(Col)`
  && {
    font-size: 50px;
    line-height: 1.3;
    color: ${COLORS.RED};
    margin-bottom: 20px;
    @media (max-width: 400px) {
      font-size: 40px;
    }
  }
`;

export const Details = styled(Col)`
  && {
    font-size: 16px;
    color: ${COLORS.SEMI_BLACK};
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const Container = styled(Col)`
  && {
    padding: 30px;
    @media (max-width: 752px) {
      padding: 30px 30px 0px 30px;
    }
  }
`;

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;
