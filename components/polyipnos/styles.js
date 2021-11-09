import { Col, Row, Table } from 'antd';
import { COLORS } from '../../utils/constants';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const ImageCol = styled(Col)`
  && {
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(157, 233, 223, 0.4),
        rgba(255, 255, 255, 0.6)
      ),
      url('bottle.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const LogoImg = styled.img`
  width: 35%;
  object-fit: cover;
  @media (max-width: 540px) {
    width: 50%;
  }
`;

export const Tagline = styled.div`
  color: ${COLORS.HIGHLIGHT_MARINE};
  letter-spacing: 3px;
  font-size: 25px;
  margin-top: 50px;
  text-shadow: 2px 2px 4px black;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  text-align: center;
`;

export const TitleCol = styled(Col)`
  && {
    font-size: 50px;
    color: ${COLORS.GRAY};
    line-height: 1.3em;
    text-align: left;
    padding: 50px 100px 30px 100px;
    @media (max-width: 992px) {
      padding: 50px 50px 30px 50px;
    }
    @media (max-width: 350px) {
      font-size: 43px;
    }
  }
`;

export const LeftContainer = styled(Col)`
  && {
    padding: 0px 30px 30px 100px;
    @media (max-width: 992px) {
      padding: 0px 50px 30px 50px;
    }
  }
`;

export const RightContainer = styled(Col)`
  && {
    padding: 0px 100px 0px 0px;
    @media (max-width: 992px) {
      padding: 0px 30px 0px 30px;
    }
  }
`;

export const MainContainer = styled(Row)`
  && {
    background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      url('crystals.jpg');
    background-repeat: no-repeat;
    background-position: -350px 0px;
    background-size: cover;
  }
`;

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: ${COLORS.DARK_GRAY};
`;

export const TextTitle = styled.div`
  color: ${COLORS.DARK_GRAY};
  font-size: 22px;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 5px;
`;

export const ArrowContainer = styled(Col)`
  && {
    padding: 0px 20px 30px 20px;
    display: flex;
    flex-direction: row;
    align-items: top;
  }
`;

export const ArrowDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FontAwesomeIcon = styled(Icon)`
  && {
    min-height: 2em;
    min-width: 2em;
    color: ${COLORS.MARINE};
    margin-right: 10px;
    margin-top: 1px;
  }
`;

export const TableCol = styled(Col)`
  && {
    padding: 30px;
    background-color: ${COLORS.LIGHTEST_GRAY};
    @media (max-width: 540px) {
      padding: 30px 0px;
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
      background-color: ${COLORS.MARINE};
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

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;
