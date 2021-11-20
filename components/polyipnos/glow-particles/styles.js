import { Col } from 'antd';
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
`;

export const Tagline = styled.div`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 18px;
  color: ${COLORS.DARK_GRAY};
`;

export const FullSizeImageDiv = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 20px;
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

export const FullSizeImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 20px;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s ease;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 30px;
`;

export const LeftCol = styled(Col)`
  && {
    padding: 50px 30px 0px 15%;
    @media only screen and (max-width: 992px) {
      padding: 50px 30px 0px 5%;
    }
    @media only screen and (max-width: 576px) {
      padding: 50px 30px 0px 30px;
    }
  }
`;

export const PreviewImageCol = styled(Col)`
  && {
    &:hover {
      cursor: pointer;
    }
    img {
      box-shadow: ${(props) =>
        props.id !== props.selected
          ? 'none'
          : 'rgba(0, 0, 0, 0.5) 0px 5px 15px'};
    }
  }
`;

export const RightCol = styled(Col)`
  && {
    padding: 50px 15% 0px 30px;
    @media only screen and (max-width: 992px) {
      padding: 50px 5% 0px 30px;
    }
    @media only screen and (max-width: 576px) {
      padding: 50px 30px 0px 30px;
    }
  }
`;

export const ProductTitle = styled.div`
  font-size: 50px;
  color: ${COLORS.MARINE};
  line-height: 0.8;
  margin-bottom: 40px;
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

export const ProductItem = styled.div`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: start;
  line-height: 200%;
`;

export const ProductItem2 = styled.div`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 200%;
`;

export const ProductSpan = styled.span`
  font-weight: 900;
  margin-right: 5px;
`;
