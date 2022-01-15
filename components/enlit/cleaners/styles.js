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
    padding: 50px 10% 50px 10%;
    width: 100%;
  }
`;

export const LeftCol = styled(Col)`
  && {
    @media only screen and (max-width: 576px) {
      padding-right: 0px;
      margin-bottom: 30px;
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
    height: 70vh;
    @media only screen and (max-width: 576px) {
      padding-left: 0px;
      height: auto;
    }
  }
`;

export const ScrollCol = styled(Col)`
  && {
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    margin-right: 3%;
    @media only screen and (max-width: 992px) {
      margin-right: 30px;
      height: 100vh;
    }
    @media only screen and (max-width: 576px) {
      height: auto;
      padding: 0px;
      overflow-y: auto;
      margin-right: 0%;
    }
  }
`;

export const BigImageCol = styled(Col)`
  && {
    width: 100%;
    height: 70vh;
    overflow: hidden;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const BigImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const SmallImageDiv = styled.div`
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.name !== props.selectedName
      ? 'none'
      : 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'};
  @media only screen and (max-width: 992px) {
    margin-right: 5%;
  }
  @media only screen and (max-width: 576px) {
    margin-right: 0px;
  }
`;

export const ProductTitle = styled.div`
  font-size: 50px;
  color: ${COLORS.DARK_BLUE};
  line-height: 1;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 47px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

export const ProductItem = styled.div`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  line-height: 200%;
  @media only screen and (max-width: 768px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;
