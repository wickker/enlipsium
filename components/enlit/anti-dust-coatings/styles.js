import { Col, Row } from 'antd';
import { COLORS } from '../../../utils/constants';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const TitleCol = styled(Col)`
  && {
    padding: 30px;
    height: 50vh;
    background-color: ${COLORS.LIGHTEST_GRAY};
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
  color: ${COLORS.MARINE};
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
  color: ${COLORS.DARK_GRAY};
`;

export const FontAwesomeIcon = styled(Icon)`
  && {
    min-height: 1.5em;
    min-width: 1.5em;
    color: ${COLORS.OKAY_GREEN};
    margin-right: 10px;
    margin-top: 3px;
  }
`;
