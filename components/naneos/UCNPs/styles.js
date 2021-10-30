import styled from 'styled-components';
import { Table, Col } from 'antd';
import { COLORS } from '../../../utils/constants';

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

export const DetailsName = styled.div`
  font-size: 50px;
  line-height: 1.3;
  color: ${COLORS.GRAY};
  margin-bottom: 20px;
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;

export const DetailsApplications = styled(Col)`
  && {
    font-size: 17px;
    color: ${COLORS.SEMI_BLACK};
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10px;
    @media (max-width: 400px) {
      font-size: 16px;
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

export const TableCol = styled(Col)`
  && {
    padding: 30px;
    background-color: ${COLORS.LIGHTEST_GRAY};
    @media (max-width: 540px) {
      background-color: white;
      padding: 0px 0px 30px 0px;
    }
  }
`;

export const StyledTable = styled(Table)`
  && {
    font-family: 'Montserrat', sans-serif;
    tr,
    th {
      font-size: 14px;
    }
    thead tr th {
      background-color: ${COLORS.RED};
      color: white;
    }
    @media (max-width: 540px) {
      tr,
      th {
        font-size: 12px;
      }
    }
  }
`;
