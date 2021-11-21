import { Col, Row, Card } from 'antd';
import { COLORS } from '../../utils/constants';
import styled from 'styled-components';

export const ImageCol = styled(Col)`
  && {
    background: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(113, 173, 223, 0.2),
        rgba(255, 255, 255, 0.4)
      ),
      url('building.webp');
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
    background-position: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media only screen and (max-width: 576px) {
      align-items: center;
    }
  }
`;

export const LogoImg = styled.img`
  width: 35%;
  object-fit: cover;
  margin: 120px 80px 0px 80px;
  @media only screen and (max-width: 576px) {
    width: 60%;
    margin: 120px 0px 0px -10px;
  }
`;

export const Tagline = styled.div`
  margin: 15px 20px;
  color: ${COLORS.GRAY};
  letter-spacing: 1px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

export const TitleCol = styled(Col)`
  && {
    padding: 50px 100px 30px 100px;
    color: ${COLORS.DARK_BLUE};
    text-align: center;
    font-size: 40px;
    line-height: 1.3em;
    @media only screen and (max-width: 576px) {
      padding: 50px 30px 30px 30px;
    }
  }
`;

export const CardRow = styled(Row)`
&& {
    padding: 0px 200px 20px 200px;
    @media only screen and (max-width: 1240px) {
        padding: 0px 30px 20px 30px;
      }
    @media only screen and (max-width: 576px) {
        padding: 0px 20px 20px 20px;
      }
`;

export const CardCol = styled(Col)`
&& {
    padding: 0px 10px 30px 10px;
`;

export const CardImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0px 0px;
`;

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;

export const StyledCard = styled(Card)`
  && {
    width: 100%;
    height: 100%;
    background-color: ${COLORS.DARK_BLUE};
    box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.3);
    border-radius: 4px;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.6);
      span {
        color: ${COLORS.LIGHTEST_GRAY};
        transition: all 0.3s ease;
      }
    }
  }
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
  color: ${COLORS.LIGHT_BLUE};
`;

export const CardDescription = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: white;
`;

export const VideoRow = styled(Row)`
  && {
    background-color: black;
    padding: 20px 100px;
    @media only screen and (max-width: 576px) {
      padding: 20px;
    }
  }
`;

export const GifCol = styled(Col)`
  && {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const GifImg = styled.img`
  width: 100%;
`;

export const ProductImg = styled.div`
  background: url('enlit-product.webp');
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
  background-position: center;
`;

export const Overlay = styled.div`
  width: 0%;
  position: absolute;
  bottom: 0px;
  overflow: hidden;
  left: 0px;
  //   background-color: rgba(8, 74, 131, 0.2);
  background-color: ${COLORS.LIGHT_BLUE};
  height: 100%;
  transition: 0.5s ease;
`;

export const OverlayCol = styled(Col)`
  && {
    &:hover {
      .findOutMore {
        width: 22%;
      }
    }
  }
`;

export const OverlayText = styled.div`
  color: ${COLORS.DARK_GRAY};
  white-space: no-wrap;
  font-size: 30px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
