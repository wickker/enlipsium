import styled from 'styled-components';
import { Col } from 'antd';
import { COLORS } from '../../utils/constants';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

export const TitleLeftCol = styled(Col)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 50px;
    background-color: black;
    height: 75vh;
  }
`;

export const NaneosImg = styled.img`
  width: 60%;
  @media only screen and (max-width: 415px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-top: 70px;
  font-size: 18px;
  color: ${COLORS.LIGHTEST_GRAY};
  width: 100%;
  font-family: 'Montserrat', sans-serif;
`;

export const DescriptionTitle = styled.div`
  font-size: 50px;
  color: ${COLORS.RED};
  line-height: 1.3em;
  padding: 0px 30px;
  margin-bottom: 30px;
  @media only screen and (max-width: 415px) {
    font-size: 37px;
  }
`;

export const XrayImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 30% 20%;
  padding: 50px 30px;
`;

export const DescriptionText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: ${COLORS.DARK_GRAY};
  padding: 0px 30px;
`;

export const DescriptionCol = styled(Col)`
  && {
    margin: 50px 0px;
    @media only screen and (max-width: 991px) {
      margin: 0px 0px 50px 0px;
    }
  }
`;

export const FontAwesomeIcon = styled(Icon)`
  && {
    min-height: 1.5em;
    min-width: 1.5em;
    color: ${COLORS.OKAY_GREEN};
    margin-right: 10px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;
