import styled, { keyframes } from 'styled-components';
import { Col, Row, Input, Alert } from 'antd';
import { COLORS } from '../../utils/constants';

export const TitleCol = styled(Col)`
  && {
    background-color: ${COLORS.DARK_GRAY};
    padding: 0px 100px;
    height: 70vh;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 400px) {
      padding: 0px 30px;
    }
  }
`;

const TitleScaleAnimation = keyframes`
  from {
    font-size: 25px;
  }
  to {
    font-size: 35px;
  }
`;

export const Title = styled.div`
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  animation: ${TitleScaleAnimation} 0.5s linear 1;
  text-align: center;
`;

export const MapFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  box-shadow: 3px 3px 10px ${COLORS.LIGHT_GRAY};
  border-radius: 20px;
`;

export const MapCol = styled(Col)`
  && {
    padding: 50px 30px 50px 50px;
    height: 75vh;
    @media only screen and (max-width: 991px) {
      padding: 50px 50px 0px 50px;
    }
  }
`;

export const FormCol = styled(Col)`
  && {
    padding: 50px 50px 50px 30px;
    @media only screen and (max-width: 991px) {
      padding: 50px;
    }
  }
`;

export const FormTitle = styled.div`
  margin-bottom: 20px;
  font-size: 50px;
  color: ${COLORS.DARK_GRAY};
  @media only screen and (max-width: 400px) {
    font-size: 40px;
  }
`;

export const FormLabel = styled.div`
  color: ${COLORS.SEMI_BLACK};
  margin-bottom: 3px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  @media only screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

export const FormInput = styled(Input)`
  && {
    margin-bottom: 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    border-radius: 5px;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const FormAlert = styled(Alert)`
  && {
    margin-bottom: 15px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const FormTextArea = styled(Input.TextArea)`
  && {
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    border-radius: 5px;
    @media only screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const FormSubmitButton = styled.input`
  background: ${COLORS.DARK_GRAY};
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: solid 3px ${COLORS.ORANGE};
  padding: 5px 30px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  &:hover {
    box-shadow: 0px 6px 6px -6px ${COLORS.ORANGE};
    cursor: pointer;
  }
`;

export const InfoCol = styled(Col)`
  && {
    background-color: ${COLORS.LIGHTEST_GRAY};
    padding: 50px 100px 0px 100px;
    @media only screen and (max-width: 400px) {
      padding: 50px 30px 0px 30px;
    }
  }
`;

export const InfoContactText = styled.div`
  color: ${COLORS.DARK_GRAY};
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const InfoDescription = styled.div`
  color: ${COLORS.GRAY};
  width: 100%;
  font-size: 13px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  background-color: ${COLORS.LIGHTEST_GRAY};
  padding: 0px 30% 50px 30%;
  @media only screen and (max-width: 991px) {
    padding: 0px 30px 50px 30px;
  }
`;

export const EmptyCol = styled(Col)`
  && {
    height: 50px;
  }
`;