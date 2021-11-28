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
    width: 100%;
    @media only screen and (max-width: 768px) {
        padding: 50px 10% 10px 10%;
      }
  }
`;

export const LeftCol = styled(Col)`
  && {
    margin-bottom: 30px;
    @media only screen and (max-width: 576px) {
      padding-right: 0px;
    }
  }
`;

export const LeftRow = styled(Row)`
  && {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const RightCol = styled(Col)`
  && {
    padding-left: 30px;
    margin-bottom: 30px;
    @media only screen and (max-width: 576px) {
      padding-left: 0px;
    }
  }
`;

export const ScrollCol = styled(Col)`
  && {
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    @media only screen and (max-width: 576px) {
      height: auto;
      padding: 0px;
      overflow-y: auto;
    }
  }
`;

export const BigImageCol = styled(Col)`
  && {
    width: 100%;
    height: 70vh;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const BigImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const SmallImageDiv = styled.div`
  margin-bottom: 20px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  box-shadow: ${(props) =>
    props.name !== props.selectedName
      ? 'none'
      : 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'};
`;

export const ProductTitle = styled.div`
  font-size: 50px;
  color: ${COLORS.DARK_BLUE};
  line-height: 1;
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
