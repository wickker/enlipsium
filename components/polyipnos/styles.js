import { Col, Row } from 'antd';
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

export const Tagline = styled.div`
  color: #7af7cd;
  letter-spacing: 2px;
  font-size: 25px;
  margin-top: 50px;
  text-shadow: 2px 2px 4px black;
  text-transform: uppercase;
`;

export const TitleCol = styled(Col)`
  && {
    font-size: 50px;
    color: ${COLORS.GRAY};
    line-height: 1.3em;
    text-align: left;
    padding: 50px 100px 30px 100px;
  }
`;

export const LeftContainer = styled(Col)`
  && {
    padding: 0px 30px 30px 100px;
  }
`;

export const RightContainer = styled(Col)`
  && {
    padding: 0px 100px 0px 0px;
  }
`;

export const MainContainer = styled(Row)`
  && {
    background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      url('https://image.shutterstock.com/image-photo/flat-lay-top-view-pile-600w-1187616253.jpg');
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

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;
